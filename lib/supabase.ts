// Supabase client configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found. Form submissions will only save to localStorage.');
}

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Helper function to save lead to Supabase
export async function saveLead(leadData: {
    nombre: string;
    email: string;
    telefono: string;
    facturacion?: string;
    tipoNegocio?: string;
    nivelCompromiso?: string;
    source?: string;
    url?: string;
}) {
    if (!supabase) {
        console.warn('Supabase not configured. Skipping database save.');
        return { success: false, error: 'Supabase not configured' };
    }

    try {
        const { data, error } = await supabase
            .from('leads')
            .insert([{
                nombre: leadData.nombre,
                email: leadData.email,
                telefono: leadData.telefono,
                facturacion: leadData.facturacion || null,
                tipo_negocio: leadData.tipoNegocio || null,
                nivel_compromiso: leadData.nivelCompromiso || null,
                source: leadData.source || 'lead_form_modal',
                url: leadData.url || window.location.href,
            }])
            .select();

        if (error) {
            console.error('Error saving to Supabase:', error);
            return { success: false, error: error.message };
        }

        console.log('Lead saved to Supabase:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Exception saving to Supabase:', error);
        return { success: false, error: String(error) };
    }
}
