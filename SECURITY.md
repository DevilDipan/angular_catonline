# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported                  |
| ------- | -------------------------  |
| < 2.1.1 | serialize-javascript  ✅   |
| < 2.0.1 | set-value             ✅   |

## Severity

 ### ❌set-value               - high severity
 ##### Details
 ###### CVE-2019-10747
Vulnerable versions: < 2.0.1
Patched version: 2.0.1
set-value is vulnerable to Prototype Pollution in versions before 2.0.1 and version 3.0.0. The function mixin-deep could be tricked into adding or modifying properties of Object.prototype using any of the constructor, prototype and proto payloads.

 ### ❌serialize-javascript    - moderate severity
 ##### Details
 ###### GHSA-h9rv-jmmf-4pgx
Vulnerable versions: < 2.1.1
Patched version: 2.1.1
regular expressions Cross-Site Scripting (XSS) vulnerability
Impact
Affected versions of this package are vulnerable to Cross-site Scripting (XSS). It does not properly mitigate against unsafe characters in serialized regular expressions.

This vulnerability is not affected on Node.js environment since Node.js's implementation of RegExp.prototype.toString() backslash-escapes all forward slashes in regular expressions.

If serialized data of regular expression objects are used in an environment other than Node.js, it is affected by this vulnerability.

Patches
This was patched in v2.1.1.
