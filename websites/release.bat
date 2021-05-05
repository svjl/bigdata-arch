PowerShell -Command "Remove-Item ..\docs\* -Exclude '$README$' -Recurse -Force"
cmd /c build.bat
PowerShell -Command "Copy-Item -Path .\build\* -Destination ..\docs -Recurse"