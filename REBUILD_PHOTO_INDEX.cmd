@echo off
setlocal
cd /d "%~dp0"
echo Checking Python and Pillow...
py -c "import PIL" >nul 2>nul
if errorlevel 1 (
  echo Pillow is required for visual duplicate detection. Installing it now...
  py -m pip install --user pillow
  if errorlevel 1 (
    echo.
    echo Pillow could not be installed. Exact duplicate checks may still run, but visual duplicate checks will be skipped.
  )
)
echo.
echo Scanning photos\journey, photos\moments and photos\surprise...
echo Duplicate files are reported and skipped. No thumbs folder is created.
py tools\build_manifest.py
if errorlevel 1 (
  echo.
  echo Index rebuild failed. Check Python installation and try again.
  pause
  exit /b 1
)
echo.
echo Audit details: data\photo-duplicates.json
echo.
pause
