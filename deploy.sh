#!/bin/bash

# Script de deploy a GitHub + Netlify
# Uso: ./deploy.sh TU_USUARIO_GITHUB

if [ -z "$1" ]; then
    echo "Uso: ./deploy.sh TU_USUARIO_GITHUB"
    echo "Ejemplo: ./deploy.sh joserubenmorones"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME="examenes-termodinamica"

echo "📦 Preparando deploy..."

# Hacer commit de cambios pendientes
git add -A
git commit -m "Deploy configuration" 2>/dev/null || true

# Agregar remote a GitHub
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Push a GitHub
echo "📤 Haciendo push a GitHub..."
git push -u origin main

echo ""
echo "✅ Código en GitHub: https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "📝 Siguiente paso:"
echo "1. Ve a https://netlify.com"
echo "2. Click 'New site from Git'"
echo "3. Selecciona tu repositorio '$REPO_NAME'"
echo "4. Deploy (sin cambiar configuración)"
echo ""
echo "Tu sitio estará disponible en ~30 segundos"
