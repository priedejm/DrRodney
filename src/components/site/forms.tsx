import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "../../lib/utils";

const speakingSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  organization: z.string().optional(),
  eventDate: z.string().optional(),
  eventLocation: z.string().optional(),
  audience: z.string().optional(),
  message: z.string().min(10, "Please share a few details"),
});
type SpeakingValues = z.infer<typeof speakingSchema>;

const generalSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please share a few details"),
});
type GeneralValues = z.infer<typeof generalSchema>;

const mailingSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
});
type MailingValues = z.infer<typeof mailingSchema>;

function fieldErrorClass(hasError: boolean) {
  return hasError ? "border-destructive focus-visible:ring-destructive" : "";
}

export function SpeakingInquiryForm({ onSurface = "light" }: { onSurface?: "light" | "dark" }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SpeakingValues>({ resolver: zodResolver(speakingSchema) });

  const onSubmit = async (values: SpeakingValues) => {
    await new Promise((r) => setTimeout(r, 400));
    toast.success("Thank you - your speaking inquiry has been received.", {
      description: "We will follow up at " + values.email + " shortly.",
    });
    reset();
  };

  const labelCls =
    onSurface === "dark" ? "text-white/90" : "text-foreground";
  const inputCls =
    onSurface === "dark"
      ? "bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/60"
      : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={labelCls}>Name</Label>
          <Input
            {...register("name")}
            className={cn(inputCls, fieldErrorClass(!!errors.name))}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            className={cn(inputCls, fieldErrorClass(!!errors.email))}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Organization</Label>
          <Input {...register("organization")} className={inputCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Event Date</Label>
          <Input {...register("eventDate")} placeholder="e.g. March 14, 2026" className={inputCls} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>Event Location</Label>
          <Input {...register("eventLocation")} className={inputCls} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label className={labelCls}>Audience Type</Label>
          <Select onValueChange={(v) => setValue("audience", v)} value={watch("audience") ?? ""}>
            <SelectTrigger className={inputCls}>
              <SelectValue placeholder="Select audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="business">Business / Leadership</SelectItem>
              <SelectItem value="community">Community / Wellness</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label className={labelCls}>Message</Label>
        <Textarea
          {...register("message")}
          rows={5}
          className={cn(inputCls, fieldErrorClass(!!errors.message))}
          placeholder="Tell us about the engagement, topics, and audience."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60",
          onSurface === "dark"
            ? "bg-white text-[var(--navy)]"
            : "bg-[var(--navy)] text-white",
        )}
      >
        {isSubmitting ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}

export function GeneralInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GeneralValues>({ resolver: zodResolver(generalSchema) });

  const onSubmit = async (values: GeneralValues) => {
    await new Promise((r) => setTimeout(r, 400));
    toast.success("Thank you - your message has been received.", {
      description: "We'll respond to " + values.email + " soon.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input {...register("name")} className={fieldErrorClass(!!errors.name)} />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" {...register("email")} className={fieldErrorClass(!!errors.email)} />
      </div>
      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea {...register("message")} rows={5} className={fieldErrorClass(!!errors.message)} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-sm bg-[var(--navy)] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export function MailingListForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MailingValues>({ resolver: zodResolver(mailingSchema) });

  const onSubmit = async (values: MailingValues) => {
    await new Promise((r) => setTimeout(r, 400));
    toast.success("You're on the list.", {
      description: "Confirmation sent to " + values.email,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
      <Input placeholder="Name" {...register("name")} className={fieldErrorClass(!!errors.name)} />
      <Input
        type="email"
        placeholder="Email"
        {...register("email")}
        className={fieldErrorClass(!!errors.email)}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-sm bg-[var(--forest)] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "…" : "Subscribe"}
      </button>
    </form>
  );
}
