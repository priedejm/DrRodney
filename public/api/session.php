<?php
require __DIR__ . '/_lib.php';
require __DIR__ . '/_auth.php';

require_method('GET');
require_cms_header();
ok(['loggedIn' => is_admin()]);
