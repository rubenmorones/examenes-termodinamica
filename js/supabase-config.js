/**
 * CONFIGURACIÓN DE SUPABASE
 * REEMPLAZA ESTAS CREDENCIALES CON LAS TUYAS
 */

const SUPABASE_URL = 'https://vhgxzxtchiepzvlaqvae.supabase.co';
const SUPABASE_KEY = 'sb_publishable_hVZHn1zo48DsXQGOMx5H1w_nnHmI_yp';

// Inicializar cliente de Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Función para verificar conexión
async function verificarConexion() {
  try {
    const { data, error } = await supabaseClient
      .from('estudiantes')
      .select('count', { count: 'exact' })
      .limit(1);

    if (error) {
      console.error('Error de conexión:', error);
      return false;
    }
    console.log('✓ Conectado a Supabase');
    return true;
  } catch (err) {
    console.error('Error:', err);
    return false;
  }
}
