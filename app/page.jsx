&quot;use client&quot;;
import { useState, useMemo } from &quot;react&quot;;
export default function Home() {
const [selectedProduct, setSelectedProduct] = useState(null);
const [categoryFilter, setCategoryFilter] = useState(&quot;SUIZOS-S&quot;);
const [brandFilter, setBrandFilter] = useState(&quot;TODAS&quot;);
const [currentImage, setCurrentImage] = useState(null);
const [showTerms, setShowTerms] = useState(false);
// Tus productos (Mantén tu lista de 200 aquí)
const products = [
// Ejemplo para SUIZOS-S
{
id: 1,
name: &quot;Daytona S-Clon&quot;,
brand: &quot;ROLEX&quot;,
line: &quot;SUIZOS-S&quot;,
price: 3450000,
warranty: &quot;2 años&quot;,
images: [&quot;https://images.unsplash.com/photo-1523170335258-
f5ed11844a49?w=800&quot;]
},
// Ejemplo para ORIGINALES (Copia y pega este para probar el selector)
{
id: 2,
name: &quot;Reloj Original Test&quot;,
brand: &quot;CASIO&quot;,
line: &quot;CASIO-ORIGINAL&quot;,
price: 250000,
warranty: &quot;1 año&quot;,
images: [&quot;https://images.unsplash.com/photo-1524592094714-
0f0654e20314?w=800&quot;]
},
];
const availableBrands = useMemo(() =&gt; {
const map = {
&quot;SUIZOS-S&quot;: [&quot;ROLEX&quot;],
&quot;PREMIUM 1.1&quot;: [&quot;ROLEX&quot;, &quot;CARTIER&quot;, &quot;RICHARD MILLE&quot;, &quot;BREITLING&quot;,
&quot;HUBLOT&quot;, &quot;CASIO&quot;, &quot;TISSOT&quot;, &quot;OMEGA&quot;, &quot;Q&amp;Q&quot;],
&quot;AAA&quot;: [&quot;CASIO&quot;, &quot;Q&amp;Q&quot;, &quot;TISSOT&quot;, &quot;OMEGA&quot;, &quot;ROLEX&quot;, &quot;CARTIER&quot;,
&quot;RICHARD MILLE&quot;, &quot;BREITLING&quot;, &quot;HUBLOT&quot;]

};
return [&quot;TODAS&quot;, ...(map[categoryFilter] || [])];
}, [categoryFilter]);
const filteredProducts = useMemo(() =&gt; {
return products.filter(
p =&gt; p.line === categoryFilter &amp;&amp;
(brandFilter === &quot;TODAS&quot; || p.brand === brandFilter)
);
}, [categoryFilter, brandFilter, products]);
return (
// CAMBIO: Fuente Inter o System-ui para un look más moderno y limpio
&lt;div style={{ background: &quot;#fff&quot;, color: &quot;#111&quot;, fontFamily: &quot;&#39;Inter&#39;, system-ui, sans-
serif&quot;, minHeight: &quot;100vh&quot; }}&gt;
{/* --- HEADER (HERO SECTION CON IMAGEN DE FONDO) --- */}
&lt;section style={{
position: &quot;relative&quot;,
height: &quot;60vh&quot;,
display: &quot;flex&quot;,
flexDirection: &quot;column&quot;,
justifyContent: &quot;center&quot;,
alignItems: &quot;center&quot;,
textAlign: &quot;center&quot;, // &lt;--- AQUÍ FALTABA LA COMA
/* OPCIÓN DE IMAGEN ACTUALIZADA (Maquinaria técnica nítida) */
backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
url(&#39;https://images.pexels.com/photos/190819/pexels-photo-
190819.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600&#39;)`,
backgroundSize: &quot;cover&quot;,
backgroundPosition: &quot;center&quot;,
backgroundAttachment: &quot;fixed&quot;,
color: &quot;#fff&quot;,
padding: &quot;0 20px&quot;,
overflow: &quot;hidden&quot;
}}&gt;
{/* Línea decorativa superior estilo minimalista */}
&lt;div style={{ width: &quot;1px&quot;, height: &quot;60px&quot;, background: &quot;rgba(255,255,255,0.3)&quot;,
marginBottom: &quot;30px&quot; }}&gt;&lt;/div&gt;
&lt;h1 style={{
letterSpacing: &quot;20px&quot;,
fontWeight: 200,

margin: 0,
fontSize: &quot;clamp(30px, 5vw, 60px)&quot;,
textTransform: &quot;uppercase&quot;,
textShadow: &quot;0 10px 30px rgba(0,0,0,0.5)&quot;
}}&gt;
APEX TIME
&lt;/h1&gt;
&lt;div style={{
height: &quot;1px&quot;,
width: &quot;100px&quot;,
background: &quot;#fff&quot;,
margin: &quot;25px 0&quot;,
opacity: 0.5
}}&gt;&lt;/div&gt;
&lt;p style={{
color: &quot;#eee&quot;,
letterSpacing: &quot;8px&quot;,
fontSize: &quot;11px&quot;,
fontWeight: 400,
textTransform: &quot;uppercase&quot;,
maxWidth: &quot;600px&quot;,
lineHeight: &quot;2&quot;
}}&gt;
ALTA RELOJERÍA &lt;span style={{ margin: &quot;0 15px&quot;, opacity: 0.3 }}&gt;|&lt;/span&gt;
CURADURÍA SELECTA
&lt;/p&gt;
&lt;div style={{
position: &quot;absolute&quot;,
bottom: &quot;30px&quot;,
right: &quot;30px&quot;,
fontSize: &quot;9px&quot;,
letterSpacing: &quot;3px&quot;,
opacity: 0.4,
textTransform: &quot;uppercase&quot;
}}&gt;
EST. 2026
&lt;/div&gt;
&lt;/section&gt;
{/* --- NAVEGACIÓN --- */}
&lt;nav style={{

position: &quot;sticky&quot;, top: 0, background: &quot;rgba(255,255,255,0.98)&quot;, zIndex: 100,
boxShadow: &quot;0 10px 40px -15px rgba(0,0,0,0.05)&quot;, borderBottom: &quot;1px solid
#f0f0f0&quot;
}}&gt;
&lt;div style={{ maxWidth: &quot;1200px&quot;, margin: &quot;0 auto&quot;, padding: &quot;0 20px&quot; }}&gt;
{/* Fila 1: Categorías y Selector de Originales */}
&lt;div style={{ display: &quot;flex&quot;, justifyContent: &quot;center&quot;, alignItems: &quot;center&quot;, gap:
&quot;8px&quot;, padding: &quot;25px 0 15px&quot;, flexWrap: &quot;wrap&quot; }}&gt;
{[&quot;SUIZOS-S&quot;, &quot;PREMIUM 1.1&quot;, &quot;AAA&quot;].map(cat =&gt; (
&lt;button key={cat} onClick={() =&gt; { setCategoryFilter(cat);
setBrandFilter(&quot;TODAS&quot;); }}
style={{
padding: &quot;12px 24px&quot;, borderRadius: &quot;4px&quot;,
border: categoryFilter === cat ? &quot;1px solid #000&quot; : &quot;1px solid #e0e0e0&quot;,
background: categoryFilter === cat ? &quot;#000&quot; : &quot;#fbfbfb&quot;,
color: categoryFilter === cat ? &quot;#fff&quot; : &quot;#666&quot;,
cursor: &quot;pointer&quot;, fontSize: &quot;11px&quot;, fontWeight: 700, letterSpacing: &quot;2px&quot;,
textTransform: &quot;uppercase&quot;, transition: &quot;all 0.2s ease&quot;, outline: &quot;none&quot;,
boxShadow: categoryFilter === cat ? &quot;0 4px 12px rgba(0,0,0,0.15)&quot; :
&quot;none&quot;
}}&gt;{cat}&lt;/button&gt;
))}
&lt;div style={{ width: &quot;1px&quot;, height: &quot;20px&quot;, background: &quot;#eee&quot;, margin: &quot;0 5px&quot;
}}&gt;&lt;/div&gt;
&lt;select
value={categoryFilter.includes(&quot;ORIGINAL&quot;) ? categoryFilter : &quot;&quot;}
onChange={(e) =&gt; { setCategoryFilter(e.target.value);
setBrandFilter(&quot;TODAS&quot;); }}
style={{ padding: &quot;12px 24px&quot;, borderRadius: &quot;4px&quot;, border: &quot;2px solid
#000&quot;, background: categoryFilter.includes(&quot;ORIGINAL&quot;) ? &quot;#000&quot; : &quot;#fff&quot;, color:
categoryFilter.includes(&quot;ORIGINAL&quot;) ? &quot;#fff&quot; : &quot;#000&quot;, fontSize: &quot;11px&quot;, fontWeight:
700, letterSpacing: &quot;1.5px&quot;, textTransform: &quot;uppercase&quot;, cursor: &quot;pointer&quot;, outline:
&quot;none&quot;, appearance: &quot;none&quot;, textAlign: &quot;center&quot;, minWidth: &quot;200px&quot; }}&gt;
&lt;option value=&quot;&quot; disabled hidden&gt;✨ ORIGINALES ▼&lt;/option&gt;
{[&quot;CHRONOS&quot;, &quot;CURREN&quot;, &quot;NAVIFORCE&quot;, &quot;CASIO&quot;, &quot;PULSO&quot;,
&quot;BENYAR&quot;, &quot;G-SHOCK&quot;, &quot;SCOTTIE&quot;, &quot;ONOLA&quot;, &quot;SKMEI&quot;, &quot;SANDA&quot;, &quot;FOXBOX&quot;,
&quot;CASSRAY&quot;, &quot;Q&amp;Q&quot;, &quot;KOSMO&quot;, &quot;EXPONI&quot;, &quot;RD&quot;].sort().map(marca =&gt; (
&lt;option key={marca} value={`${marca}-ORIGINAL`}&gt;{marca}
(ORIGINAL)&lt;/option&gt;
))}

&lt;/select&gt;
&lt;/div&gt;
{/* Fila 2: Marcas con scroll lateral corregido */}
&lt;div style={{
display: &quot;flex&quot;, gap: &quot;35px&quot;, padding: &quot;15px 0 25px&quot;,
overflowX: &quot;auto&quot;, scrollbarWidth: &quot;none&quot;,
justifyContent: &quot;flex-start&quot;,
WebkitOverflowScrolling: &quot;touch&quot;
}}&gt;
&lt;style&gt;{`div::-webkit-scrollbar { display: none; }`}&lt;/style&gt;
{availableBrands.map(brand =&gt; (
&lt;span key={brand} onClick={() =&gt; setBrandFilter(brand)}
style={{
cursor: &quot;pointer&quot;, fontSize: &quot;11px&quot;, whiteSpace: &quot;nowrap&quot;,
letterSpacing: &quot;2px&quot;, textTransform: &quot;uppercase&quot;, fontWeight: 700,
color: brandFilter === brand ? &quot;#000&quot; : &quot;#ccc&quot;,
position: &quot;relative&quot;, paddingBottom: &quot;8px&quot;,
flexShrink: 0
}}&gt;
{brand}
{brandFilter === brand &amp;&amp; &lt;span style={{ position: &quot;absolute&quot;, bottom: 0,
left: 0, width: &quot;100%&quot;, height: &quot;2px&quot;, background: &quot;#000&quot; }}&gt;&lt;/span&gt;}
&lt;/span&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
&lt;/nav&gt;
{/* --- GRID DE PRODUCTOS (ARQUITECTÓNICO / LUXURY BRUTALIST) --- */}
&lt;main style={{
maxWidth: &quot;1300px&quot;,
margin: &quot;40px auto&quot;,
padding: &quot;0 20px&quot;,
display: &quot;grid&quot;,
gridTemplateColumns: &quot;repeat(auto-fill, minmax(300px, 1fr))&quot;,
gap: &quot;0px&quot; // Sin espacio entre cuadros para crear un efecto de muro de lujo
}}&gt;
{filteredProducts.map(p =&gt; (
&lt;div key={p.id}
onClick={() =&gt; setSelectedProduct(p)}
style={{
cursor: &quot;pointer&quot;,

background: &quot;#fff&quot;,
border: &quot;0.5px solid #e5e5e5&quot;, // Líneas finas y rígidas
position: &quot;relative&quot;,
overflow: &quot;hidden&quot;,
transition: &quot;all 0.5s cubic-bezier(0.19, 1, 0.22, 1)&quot;
}}
onMouseEnter={(e) =&gt; {
e.currentTarget.style.zIndex = &quot;10&quot;;
e.currentTarget.style.outline = &quot;4px solid #000&quot;; // Marco negro fuerte al
pasar el mouse
e.currentTarget.querySelector(&#39;.hover-line&#39;).style.width = &quot;100%&quot;; // &lt;---
AÑADIR ESTA LÍNEA
}}
onMouseLeave={(e) =&gt; {
e.currentTarget.style.zIndex = &quot;1&quot;;
e.currentTarget.style.outline = &quot;none&quot;;
e.currentTarget.querySelector(&#39;.hover-line&#39;).style.width = &quot;0%&quot;; // &lt;---
AÑADIR ESTA LÍNEA
}}
&gt;
{/* Contenedor de Imagen Recto y Crudo */}
&lt;div style={{
position: &quot;relative&quot;,
aspectRatio: &quot;1/1&quot;,
overflow: &quot;hidden&quot;,
background: &quot;#f2f2f2&quot;
}}&gt;
&lt;img
src={p.images[0]}
alt={p.name}
style={{
width: &quot;100%&quot;,
height: &quot;100%&quot;,
objectFit: &quot;cover&quot;,
filter: &quot;grayscale(20%)&quot;, // Estilo visual más serio
transition: &quot;transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)&quot;
}}
onMouseEnter={(e) =&gt; e.currentTarget.style.transform = &quot;scale(1.15)&quot;}
onMouseLeave={(e) =&gt; e.currentTarget.style.transform = &quot;scale(1)&quot;}
/&gt;
{/* Etiqueta de Categoría (Estilo Industrial) */}

&lt;div style={{
position: &quot;absolute&quot;,
top: &quot;0&quot;,
left: &quot;0&quot;,
background: &quot;#000&quot;,
color: &quot;#fff&quot;,
padding: &quot;8px 15px&quot;,
fontSize: &quot;10px&quot;,
fontWeight: &quot;900&quot;,
letterSpacing: &quot;2px&quot;,
textTransform: &quot;uppercase&quot;
}}&gt;
{p.line.split(&#39;-&#39;)[0]}
&lt;/div&gt;
&lt;/div&gt;
{/* Bloque de Información Minimalista */}
&lt;div style={{
padding: &quot;30px 20px&quot;,
textAlign: &quot;left&quot;, // Alineación lateral para romper lo común
display: &quot;flex&quot;,
flexDirection: &quot;column&quot;,
justifyContent: &quot;space-between&quot;,
height: &quot;140px&quot;
}}&gt;
&lt;div&gt;
&lt;p style={{
fontSize: &quot;10px&quot;,
color: &quot;#888&quot;,
letterSpacing: &quot;4px&quot;,
margin: &quot;0 0 5px 0&quot;,
textTransform: &quot;uppercase&quot;
}}&gt;
{p.brand}
&lt;/p&gt;
&lt;h3 style={{
fontWeight: &quot;700&quot;,
fontSize: &quot;18px&quot;,
margin: &quot;0&quot;,
color: &quot;#000&quot;,
letterSpacing: &quot;-0.5px&quot;,
lineHeight: &quot;1&quot;
}}&gt;

{p.name.toUpperCase()}
&lt;/h3&gt;
&lt;/div&gt;
&lt;div style={{ display: &quot;flex&quot;, justifyContent: &quot;space-between&quot;, alignItems:
&quot;baseline&quot; }}&gt;
&lt;p style={{
fontWeight: &quot;900&quot;,
fontSize: &quot;16px&quot;,
color: &quot;#000&quot;,
margin: &quot;0&quot;
}}&gt;
${p.price.toLocaleString()}
&lt;/p&gt;
&lt;span style={{ fontSize: &quot;9px&quot;, fontWeight: &quot;700&quot;, color: &quot;#ccc&quot;
}}&gt;COP&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
{/* Efecto de barra de carga estética al fondo */}
&lt;div style={{ width: &quot;0%&quot;, height: &quot;2px&quot;, background: &quot;#000&quot;, transition: &quot;width
0.4s ease&quot; }} className=&quot;hover-line&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/main&gt;
{/* MODAL DE PRODUCTO */}
{selectedProduct &amp;&amp; (
&lt;div style={{ position: &quot;fixed&quot;, inset: 0, background: &quot;rgba(0,0,0,0.6)&quot;,
backdropFilter: &quot;blur(4px)&quot;, display: &quot;flex&quot;, alignItems: &quot;center&quot;, justifyContent:
&quot;center&quot;, zIndex: 1000, padding: &quot;20px&quot; }}&gt;
&lt;div style={{ background: &quot;#fff&quot;, maxWidth: &quot;450px&quot;, width: &quot;100%&quot;,
borderRadius: &quot;20px&quot;, padding: &quot;25px&quot;, position: &quot;relative&quot;, maxHeight: &quot;90vh&quot;,
overflowY: &quot;auto&quot; }}&gt;
&lt;button onClick={() =&gt; { setSelectedProduct(null); setCurrentImage(null); }}
style={{ position: &quot;absolute&quot;, top: &quot;15px&quot;, right: &quot;15px&quot;, background: &quot;#eee&quot;,
border: &quot;none&quot;, borderRadius: &quot;50%&quot;, width: &quot;30px&quot;, height: &quot;30px&quot;, cursor: &quot;pointer&quot;,
zIndex: 10 }}&gt;✕&lt;/button&gt;
{/* GALERÍA */}
&lt;div style={{ width: &quot;100%&quot;, marginTop: &quot;10px&quot; }}&gt;

&lt;div style={{ overflow: &quot;hidden&quot;, borderRadius: &quot;12px&quot;, cursor: &quot;zoom-in&quot;,
background: &quot;#f9f9f9&quot;, marginBottom: &quot;15px&quot; }}&gt;
&lt;img src={currentImage || selectedProduct.images[0]}
style={{ width: &quot;100%&quot;, height: &quot;auto&quot;, display: &quot;block&quot;, transition:
&quot;transform 0.3s ease&quot; }}
onMouseEnter={(e) =&gt; e.currentTarget.style.transform = &quot;scale(1.5)&quot;}
onMouseLeave={(e) =&gt; e.currentTarget.style.transform = &quot;scale(1)&quot;} /&gt;
&lt;/div&gt;
&lt;div style={{ display: &quot;flex&quot;, gap: &quot;10px&quot;, marginBottom: &quot;20px&quot;, overflowX:
&quot;auto&quot; }}&gt;
{selectedProduct.images.map((img, idx) =&gt; (
&lt;img key={idx} src={img} onClick={() =&gt; setCurrentImage(img)}
style={{ width: &quot;70px&quot;, height: &quot;70px&quot;, objectFit: &quot;cover&quot;, borderRadius:
&quot;8px&quot;, cursor: &quot;pointer&quot;, flexShrink: 0, border: (currentImage === img ||
(!currentImage &amp;&amp; idx === 0)) ? &quot;2px solid #D4AF37&quot; : &quot;2px solid transparent&quot; }} /&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
{/* INFO */}
&lt;div style={{ marginTop: &quot;10px&quot; }}&gt;
&lt;span style={{ background: &quot;#ffebee&quot;, color: &quot;#d32f2f&quot;, padding: &quot;4px 8px&quot;,
borderRadius: &quot;4px&quot;, fontSize: &quot;11px&quot;, fontWeight: &quot;bold&quot; }}&gt;�� CAS
AGOTADO&lt;/span&gt;
&lt;h2 style={{ marginTop: &quot;15px&quot;, fontWeight: &quot;600&quot;, fontSize: &quot;22px&quot;
}}&gt;{selectedProduct.name}&lt;/h2&gt;
&lt;p style={{ fontSize: &quot;24px&quot;, fontWeight: &quot;700&quot;, margin: &quot;10px 0&quot;
}}&gt;${selectedProduct.price.toLocaleString()} COP&lt;/p&gt;
&lt;div style={{ margin: &quot;20px 0&quot;, padding: &quot;15px&quot;, borderTop: &quot;1px solid #eee&quot;
}}&gt;
&lt;p style={{ fontWeight: &quot;700&quot;, fontSize: &quot;12px&quot;, marginBottom: &quot;10px&quot;
}}&gt;CARACTERÍSTICAS:&lt;/p&gt;
&lt;p style={{ fontSize: &quot;14px&quot;, margin: &quot;5px 0&quot; }}&gt;⌚ HORA ANÁLOGA&lt;/p&gt;
&lt;p style={{ fontSize: &quot;14px&quot;, margin: &quot;5px 0&quot; }}&gt;�� CRISTAL MINERA
RESISTENTE&lt;/p&gt;
&lt;p style={{ fontSize: &quot;14px&quot;, margin: &quot;5px 0&quot; }}&gt;�� INCLUYE CAJA D
PRESENTACIÓN&lt;/p&gt;
&lt;/div&gt;
{/* SECCIÓN DE TÉRMINOS DESPLEGABLE */}
&lt;div style={{ marginTop: &quot;15px&quot;, borderTop: &quot;1px solid #eee&quot; }}&gt;
&lt;div
onClick={() =&gt; setShowTerms(!showTerms)}
style={{

cursor: &quot;pointer&quot;,
display: &quot;flex&quot;,
justifyContent: &quot;space-between&quot;,
alignItems: &quot;center&quot;,
padding: &quot;12px 0&quot;
}}
&gt;
&lt;span style={{ fontSize: &quot;12px&quot;, fontWeight: &quot;700&quot;, color: &quot;#333&quot; }}&gt;
�� TÉRMINOS, GARANTÍA Y DEVOLUCIONES
&lt;/span&gt;
&lt;span style={{ fontSize: &quot;12px&quot; }}&gt;{showTerms ? &quot;▲&quot; : &quot;▼&quot;}&lt;/span&gt;
&lt;/div&gt;
{showTerms &amp;&amp; (
&lt;div style={{
fontSize: &quot;11px&quot;,
color: &quot;#666&quot;,
lineHeight: &quot;1.4&quot;,
padding: &quot;12px&quot;,
background: &quot;#f9f9f9&quot;,
borderRadius: &quot;10px&quot;,
marginBottom: &quot;10px&quot;
}}&gt;
{/* 1. LÍNEA DE GARANTÍA DINÁMICA (SOLO UNA) */}
&lt;p style={{ marginBottom: &quot;5px&quot; }}&gt;
• ⚙️ &lt;strong&gt;Garantía:&lt;/strong&gt; {selectedProduct.warranty} por maquinaria.
&lt;/p&gt;
&lt;p style={{ marginBottom: &quot;5px&quot; }}&gt;
• �� &lt;strong&gt;Peritaje:&lt;/strong&gt; No se aceptan cambios de satisfaccion, si l
pieza tiene rayones o marcas de uso.
&lt;/p&gt;
&lt;p&gt;
• �� &lt;strong&gt;Seguridad:&lt;/strong&gt; Grabamos video del estado de cada relo
antes del envío.
&lt;/p&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
&lt;button onClick={() =&gt; {
const mensaje = `Hola APEX TIME, deseo adquirir esta pieza:

⌚ *Modelo:* ${selectedProduct.name}
��️ *Ref:* ${selectedProduct.brand}-${selectedProduct.id}
�� *Precio:* $${selectedProduct.price.toLocaleString()} COP
��️ *Garantía:* ${selectedProduct.warranty}
*He leído y acepto los términos de garantía y peritaje técnico.* ¿Sigue disponible?`;
window.open(`https://wa.me/573126934247?text=${encodeURIComponent(mensaje
)}`, &quot;_blank&quot;);
}}
style={{
width: &quot;100%&quot;,
padding: &quot;16px&quot;,
background: &quot;#25D366&quot;,
color: &quot;#fff&quot;,
border: &quot;none&quot;,
borderRadius: &quot;12px&quot;,
fontWeight: &quot;700&quot;,
cursor: &quot;pointer&quot;,
marginTop: &quot;10px&quot;
}}&gt;
SOLICITAR POR WHATSAPP ��
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
);
}
