/*

  ÔNIBUS 1
  
*/

const onibus1 = {
  titulosRotas07he14h: [
    { titulo: 'Posto Fiscal Pontões' },
    { titulo: 'Posto Fiscal - Barão de Grajaú' },
    { titulo: 'Posto Tropical' },
    { titulo: 'Hospital' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Sorvetes Quick' },
    { titulo: 'Agespisa' },
    { titulo: 'Fartote Freitas' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Universidade Federal do Piauí' },
  ],
  coordenadasRotas07he14h: [
    { lat: -6.763243, lng: -43.010186 },
    { lat: -6.755066, lng: -43.01447 },
    { lat: -6.755124, lng: -43.019727 },
    { lat: -6.754217, lng: -43.026155 },
    { lat: -6.777535, lng: -43.010081 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.781115, lng: -43.023631 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.787119, lng: -43.041498 },
  ],
  horario07: [
    { hora: '06:57h' },
    { hora: '06:59h' },
    { hora: '07:02h' },
    { hora: '07:03h' },
    { hora: '07:10h' },
    { hora: '07:12h' },
    { hora: '07:13h' },
    { hora: '07:15h' },
    { hora: '07:17h' },
    { hora: '07:22h' },
  ],
  horario14: [
    { hora: '13:27h' },
    { hora: '13:29h' },
    { hora: '13:31h' },
    { hora: '13:33h' },
    { hora: '13:40h' },
    { hora: '13:42h' },
    { hora: '13:44h' },
    { hora: '13:45h' },
    { hora: '13:46h' },
    { hora: '13:51h' },
  ],
  lineRotas07he14h: [
    { lat: -6.763259, lng: -43.010237 }, // Inícioo
    { lat: -6.761276, lng: -43.01093 }, // Ponte Pi - Ma
    { lat: -6.757292, lng: -43.012412 }, // BR230
    { lat: -6.756615, lng: -43.012765 }, //
    { lat: -6.756237, lng: -43.013039 }, //
    { lat: -6.755843, lng: -43.013424 }, //
    { lat: -6.755392, lng: -43.01402 }, //
    { lat: -6.755089, lng: -43.014636 }, //
    { lat: -6.754873, lng: -43.01538 }, //
    { lat: -6.754817, lng: -43.015951 }, //
    { lat: -6.754871, lng: -43.016824 }, //
    { lat: -6.755027, lng: -43.018185 }, //
    { lat: -6.755202, lng: -43.019675 }, //
    { lat: -6.755366, lng: -43.021486 }, //
    { lat: -6.755384, lng: -43.022179 }, //
    { lat: -6.755315, lng: -43.022745 }, //
    { lat: -6.755147, lng: -43.023332 }, //
    { lat: -6.754814, lng: -43.02437 }, //
    { lat: -6.754198, lng: -43.026248 }, //
    { lat: -6.754251, lng: -43.026395 }, //
    { lat: -6.754345, lng: -43.026411 }, //
    { lat: -6.754418, lng: -43.026351 }, //
    { lat: -6.754405, lng: -43.026269 }, //
    { lat: -6.754354, lng: -43.026221 }, //
    { lat: -6.754256, lng: -43.026231 }, //
    { lat: -6.754202, lng: -43.026223 }, // BR230
    { lat: -6.754256, lng: -43.026231 }, //
    { lat: -6.754354, lng: -43.026221 }, //
    { lat: -6.754405, lng: -43.026269 }, //
    { lat: -6.754418, lng: -43.026351 }, //
    { lat: -6.754345, lng: -43.026411 }, //
    { lat: -6.754251, lng: -43.026395 }, //
    { lat: -6.754198, lng: -43.026248 }, //
    { lat: -6.754814, lng: -43.02437 }, //
    { lat: -6.755147, lng: -43.023332 }, //
    { lat: -6.755315, lng: -43.022745 }, //
    { lat: -6.755384, lng: -43.022179 }, //
    { lat: -6.755366, lng: -43.021486 }, //
    { lat: -6.755202, lng: -43.019675 }, //
    { lat: -6.755027, lng: -43.018185 }, //
    { lat: -6.754871, lng: -43.016824 }, //
    { lat: -6.754817, lng: -43.015951 }, //
    { lat: -6.754873, lng: -43.01538 }, //
    { lat: -6.755089, lng: -43.014636 }, //
    { lat: -6.755392, lng: -43.01402 }, //
    { lat: -6.755843, lng: -43.013424 }, //
    { lat: -6.756237, lng: -43.013039 }, //
    { lat: -6.756615, lng: -43.012765 }, //
    { lat: -6.757292, lng: -43.012412 }, // BR230
    { lat: -6.761276, lng: -43.01093 }, // Ponte Pi - Ma
    { lat: -6.76384, lng: -43.010056 }, // BR230
    { lat: -6.766963, lng: -43.008926 }, // BR230
    { lat: -6.772377, lng: -43.006953 }, // Curva BR343 - BR230
    { lat: -6.772636, lng: -43.007185 }, // Curva BR343 - BR230
    { lat: -6.772861, lng: -43.007413 }, // Curva BR343 - BR230
    { lat: -6.77317, lng: -43.00755 }, // Curva BR343
    { lat: -6.773507, lng: -43.007526 }, //
    { lat: -6.773839, lng: -43.007454 }, //
    { lat: -6.774049, lng: -43.007445 }, //
    { lat: -6.774301, lng: -43.007492 }, //
    { lat: -6.774601, lng: -43.007611 }, // Curva BR343
    { lat: -6.775199, lng: -43.0081 }, // Semáforo
    { lat: -6.784567, lng: -43.015596 }, //
    { lat: -6.784569, lng: -43.015687 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.776943, lng: -43.033087 }, // Rotatória Trevo I
    { lat: -6.776927, lng: -43.033178 }, // Rotatória Trevo I
    { lat: -6.776982, lng: -43.033242 }, // Rotatória Trevo I
    { lat: -6.777049, lng: -43.033247 }, // Rotatória Trevo I
    { lat: -6.777103, lng: -43.033226 }, // Rotatória Trevo I
    { lat: -6.777237, lng: -43.033283 }, // Trevo I
    { lat: -6.777348, lng: -43.033316 }, //
    { lat: -6.777737, lng: -43.033511 }, //
    { lat: -6.778644, lng: -43.034583 }, //
    { lat: -6.780254, lng: -43.036431 }, //
    { lat: -6.782003, lng: -43.038477 }, //
    { lat: -6.784334, lng: -43.041123 }, //
    { lat: -6.784985, lng: -43.041802 }, //
    { lat: -6.786093, lng: -43.042773 }, // UFPI - Portão
    { lat: -6.787119, lng: -43.041498 }, // UFPI - Fim da rota
  ],
}

/*

  ÔNIBUS 2

*/

const onibus2 = {
  titulosRotas07he14h: [
    { titulo: 'Garagem da prefeitura' },
    { titulo: 'Posto Zito' },
    { titulo: 'Diocese' },
    { titulo: 'Paraíba' },
    { titulo: 'Residencial Cantumbi' },
    { titulo: 'Hotel Rio Parnaíba' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Sorvetes Quick' },
    { titulo: 'Agespisa' },
    { titulo: 'Fartote Freitas' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Universidade Federal do Piauí' },
  ],
  coordenadasRotas07he14h: [
    { lat: -6.769857, lng: -43.034901 },
    { lat: -6.769419, lng: -43.028089 },
    { lat: -6.769188, lng: -43.024902 },
    { lat: -6.768719, lng: -43.019069 },
    { lat: -6.770855, lng: -43.012945 },
    { lat: -6.774037, lng: -43.009452 },
    { lat: -6.779149, lng: -43.01134 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.781115, lng: -43.023631 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.787119, lng: -43.041498 },
  ],
  horario07: [
    { hora: '06:56h' },
    { hora: '06:58h' },
    { hora: '07:00h' },
    { hora: '07:02h' },
    { hora: '07:04h' },
    { hora: '07:05h' },
    { hora: '07:07h' },
    { hora: '07:09h' },
    { hora: '07:11h' },
    { hora: '07:13h' },
    { hora: '07:15h' },
    { hora: '07:20h' },
  ],
  horario14: [
    { hora: '13:26h' },
    { hora: '13:28h' },
    { hora: '13:30h' },
    { hora: '13:32h' },
    { hora: '13:34h' },
    { hora: '13:35h' },
    { hora: '13:37h' },
    { hora: '13:39h' },
    { hora: '13:41h' },
    { hora: '13:43h' },
    { hora: '13:45h' },
    { hora: '13:50h' },
  ],
  lineRotas07he14h: [
    { lat: -6.769797, lng: -43.034901 }, // Garagem da prefeitura
    { lat: -6.769111, lng: -43.024485 }, // Correção
    { lat: -6.769088, lng: -43.02412 }, // Euripedes Aguiar
    { lat: -6.768925, lng: -43.022691 }, // Correção - Detona Coxinha
    { lat: -6.768682, lng: -43.018962 }, // Correção
    { lat: -6.768525, lng: -43.017502 }, // Mercado Central
    { lat: -6.768865, lng: -43.017006 }, // Curva - Mercado Central
    { lat: -6.769326, lng: -43.016099 }, // Correção
    { lat: -6.770499, lng: -43.01362 }, // Correção
    { lat: -6.771071, lng: -43.012516 }, // Curva Bucar Neto
    { lat: -6.771223, lng: -43.012314 }, // Curva Bucar Neto
    { lat: -6.771336, lng: -43.012223 }, // Curva Bucar Neto
    { lat: -6.771817, lng: -43.011879 }, // Curva Bucar Neto
    { lat: -6.7724, lng: -43.011509 }, // Curva Bucar Neto
    { lat: -6.772464, lng: -43.011474 }, // Curva Bucar Neto
    { lat: -6.772669, lng: -43.011177 }, // Curva Bucar Neto
    { lat: -6.772918, lng: -43.010676 }, // Curva Bucar Neto
    { lat: -6.773185, lng: -43.010328 }, //
    { lat: -6.773766, lng: -43.009674 }, //
    { lat: -6.775199, lng: -43.0081 }, // Semáforo
    { lat: -6.784567, lng: -43.015596 }, //
    { lat: -6.784569, lng: -43.015687 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.776943, lng: -43.033087 }, // Rotatória Trevo I
    { lat: -6.776927, lng: -43.033178 }, // Rotatória Trevo I
    { lat: -6.776982, lng: -43.033242 }, // Rotatória Trevo I
    { lat: -6.777049, lng: -43.033247 }, // Rotatória Trevo I
    { lat: -6.777103, lng: -43.033226 }, // Rotatória Trevo I
    { lat: -6.777237, lng: -43.033283 }, // Trevo I
    { lat: -6.777348, lng: -43.033316 }, //
    { lat: -6.777737, lng: -43.033511 }, //
    { lat: -6.778644, lng: -43.034583 }, //
    { lat: -6.780254, lng: -43.036431 }, //
    { lat: -6.782003, lng: -43.038477 }, //
    { lat: -6.784334, lng: -43.041123 }, //
    { lat: -6.784985, lng: -43.041802 }, //
    { lat: -6.786093, lng: -43.042773 }, // UFPI - Portão
    { lat: -6.787119, lng: -43.041498 }, // UFPI - Fim da rota
  ],
  titulosRota17h: [
    { titulo: 'Universidade Federal do Piauí' },
    { titulo: 'Terreno baldio' },
    { titulo: 'Garagem da prefeitura' },
    { titulo: 'Posto Zito' },
    { titulo: 'Diocese' },
    { titulo: 'Paraíba' },
    { titulo: 'Residencial Cantumbi' },
    { titulo: 'Hotel Rio Parnaíba' },
    { titulo: 'Terminal Rodoviário' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Sorvetes Quick' },
    { titulo: 'Agespisa' },
    { titulo: 'Fartote Freitas' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Universidade Federal do Piauí' },
  ],
  coordenadasRota17h: [
    { lat: -6.787119, lng: -43.041498 },
    { lat: -6.776793, lng: -43.033279 },
    { lat: -6.769857, lng: -43.034901 },
    { lat: -6.769419, lng: -43.028089 },
    { lat: -6.769188, lng: -43.024902 },
    { lat: -6.768719, lng: -43.019069 },
    { lat: -6.770855, lng: -43.012945 },
    { lat: -6.774037, lng: -43.009452 },
    { lat: -6.78733, lng: -42.992241 },
    { lat: -6.779149, lng: -43.01134 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.781115, lng: -43.023631 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.787119, lng: -43.041498 },
  ],
  horario17: [
    { hora: '17:05h' },
    { hora: '17:08h' },
    { hora: '17:11h' },
    { hora: '17:13h' },
    { hora: '17:16h' },
    { hora: '17:19h' },
    { hora: '17:23h' },
    { hora: '17:26h' },
    { hora: '17:30h' },
    { hora: '17:35h' },
    { hora: '17:37h' },
    { hora: '17:39h' },
    { hora: '17:41h' },
    { hora: '17:43h' },
    { hora: '17:49h' },
  ],
  lineRota17h: [
    { lat: -6.786682, lng: -42.993461 }, // Terminal Rodoviario
    { lat: -6.786773, lng: -42.993187 }, //
    { lat: -6.786787, lng: -42.992948 }, //
    { lat: -6.78733, lng: -42.992241 }, //
    { lat: -6.787416, lng: -42.992167 }, //
    { lat: -6.787513, lng: -42.992149 }, //
    { lat: -6.78764, lng: -42.992219 }, //
    { lat: -6.787658, lng: -42.992307 }, //
    { lat: -6.787357, lng: -42.992785 }, //
    { lat: -6.787027, lng: -42.993179 }, //
    { lat: -6.786826, lng: -42.993354 }, //
    { lat: -6.786682, lng: -42.993461 }, // Terminal Rodoviario
    { lat: -6.783535, lng: -42.998232 }, //
    { lat: -6.782593, lng: -42.999757 }, //
    { lat: -6.781243, lng: -43.001722 }, //
    { lat: -6.780123, lng: -43.003108 }, //
    { lat: -6.778961, lng: -43.004335 }, //
    { lat: -6.776035, lng: -43.00742 }, //
    { lat: -6.775633, lng: -43.007673 }, //
    { lat: -6.775225, lng: -43.008116 }, // Semáforo
    { lat: -6.784541, lng: -43.015585 }, // FM
    { lat: -6.784568, lng: -43.01564 }, //
    { lat: -6.784546, lng: -43.015736 }, //
    { lat: -6.783213, lng: -43.018815 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.776975, lng: -43.033061 }, // Rotatória Trevo I
    // { lat: , lng: - }, //
    { lat: -6.776975, lng: -43.033061 }, // Rotatória Trevo I
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.783213, lng: -43.018815 }, //
    { lat: -6.784546, lng: -43.015736 }, //
    { lat: -6.784568, lng: -43.01564 }, //
    { lat: -6.784541, lng: -43.015585 }, // FM
    { lat: -6.775225, lng: -43.008116 }, // Semáforo
    { lat: -6.773766, lng: -43.009674 }, //
    { lat: -6.773185, lng: -43.010328 }, //
    { lat: -6.772918, lng: -43.010676 }, // Curva Bucar Neto
    { lat: -6.772669, lng: -43.011177 }, // Curva Bucar Neto
    { lat: -6.772464, lng: -43.011474 }, // Curva Bucar Neto
    { lat: -6.7724, lng: -43.011509 }, // Curva Bucar Neto
    { lat: -6.771817, lng: -43.011879 }, // Curva Bucar Neto
    { lat: -6.771336, lng: -43.012223 }, // Curva Bucar Neto
    { lat: -6.771223, lng: -43.012314 }, // Curva Bucar Neto
    { lat: -6.771071, lng: -43.012516 }, // Curva Bucar Neto
    { lat: -6.770499, lng: -43.01362 }, // Correção
    { lat: -6.769326, lng: -43.016099 }, // Correção
    { lat: -6.768865, lng: -43.017006 }, // Curva - Mercado Central
    { lat: -6.768525, lng: -43.017502 }, // Mercado Central
    { lat: -6.768682, lng: -43.018962 }, // Correção
    { lat: -6.768925, lng: -43.022691 }, // Correção - Detona Coxinha
    { lat: -6.769088, lng: -43.02412 }, // Euripedes Aguiar
    { lat: -6.769111, lng: -43.024485 }, // Correção
    { lat: -6.769797, lng: -43.034901 }, // Garagem da prefeitura
    { lat: -6.769801, lng: -43.035093 }, // Av. Gov. Dirceu Arco Verde
    { lat: -6.769897, lng: -43.035104 }, //
    { lat: -6.773266, lng: -43.034727 }, //
    { lat: -6.774706, lng: -43.034578 }, //
    { lat: -6.775303, lng: -43.034409 }, //
    { lat: -6.775766, lng: -43.034199 }, //
    { lat: -6.776354, lng: -43.033808 }, // Av. Gov. Dirceu Arco Verde
    { lat: -6.77692, lng: -43.033186 }, // Rotatória Trevo I
    { lat: -6.776931, lng: -43.03311 }, // Rotatória Trevo I
    { lat: -6.776975, lng: -43.033061 }, // Rotatória Trevo I
    { lat: -6.777037, lng: -43.033046 }, // Rotatória Trevo I
    { lat: -6.777108, lng: -43.033086 }, // Rotatória Trevo I
    { lat: -6.777123, lng: -43.033165 }, // Rotatória Trevo I
    { lat: -6.777268, lng: -43.033234 }, // Rotatória Trevo I
    { lat: -6.777737, lng: -43.033511 }, // BR343
    { lat: -6.778644, lng: -43.034583 }, //
    { lat: -6.780254, lng: -43.036431 }, //
    { lat: -6.782003, lng: -43.038477 }, //
    { lat: -6.784334, lng: -43.041123 }, //
    { lat: -6.784985, lng: -43.041802 }, //
    { lat: -6.786093, lng: -43.042773 }, // UFPI - Portão
    { lat: -6.787119, lng: -43.041498 }, // UFPI
  ],
}

/*

  ÔNIBUS 3

*/

const onibus3 = {
  titulosRotas07he14h: [
    { titulo: 'Miguel da pias' },
    { titulo: "Educandário Santa Joana D'Arc" },
    { titulo: 'Paraíba' },
    { titulo: 'Residencial Cantumbi' },
    { titulo: 'Hotel Rio Parnaíba' },
    { titulo: 'Terminal Rodoviário' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Sorvetes Quick' },
    { titulo: 'Agespisa' },
    { titulo: 'Fartote Freitas' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Universidade Federal do Piauí' },
  ],
  coordenadasRotas07he14h: [
    { lat: -6.776607, lng: -43.023473 },
    { lat: -6.772138, lng: -43.023813 },
    { lat: -6.768719, lng: -43.019069 },
    { lat: -6.770855, lng: -43.012945 },
    { lat: -6.774037, lng: -43.009452 },
    { lat: -6.78733, lng: -42.992241 },
    { lat: -6.779149, lng: -43.01134 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.781115, lng: -43.023631 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.787119, lng: -43.041498 },
  ],
  horario07: [
    { hora: '06:56h' },
    { hora: '06:58h' },
    { hora: '07:00h' },
    { hora: '07:03h' },
    { hora: '07:05h' },
    { hora: '07:09h' },
    { hora: '07:14h' },
    { hora: '07:16h' },
    { hora: '07:18h' },
    { hora: '07:20h' },
    { hora: '07:22h' },
    { hora: '07:26h' },
  ],
  horario14: [
    { hora: '13:16h' },
    { hora: '13:18h' },
    { hora: '13:20h' },
    { hora: '13:22h' },
    { hora: '13:24h' },
    { hora: '13:28h' },
    { hora: '13:32h' },
    { hora: '13:34h' },
    { hora: '13:36h' },
    { hora: '13:38h' },
    { hora: '13:40h' },
    { hora: '13:45h' },
  ],
  lineRotas07he14h: [
    { lat: -6.776607, lng: -43.023473 }, // Miguel das Pias
    { lat: -6.774287, lng: -43.023627 }, // Correção
    { lat: -6.771994, lng: -43.023854 }, // Correção
    { lat: -6.769088, lng: -43.02412 }, // Euripedes Aguiar
    { lat: -6.768925, lng: -43.022691 }, // Correção - Detona Coxinha
    { lat: -6.768682, lng: -43.018962 }, // Correção
    { lat: -6.768525, lng: -43.017502 }, // Mercado Central
    { lat: -6.768865, lng: -43.017006 }, // Curva - Mercado Central
    { lat: -6.769326, lng: -43.016099 }, // Correção
    { lat: -6.770499, lng: -43.01362 }, // Correção
    { lat: -6.771071, lng: -43.012516 }, // Curva Bucar Neto
    { lat: -6.771223, lng: -43.012314 }, // Curva Bucar Neto
    { lat: -6.771336, lng: -43.012223 }, // Curva Bucar Neto
    { lat: -6.771817, lng: -43.011879 }, // Curva Bucar Neto
    { lat: -6.7724, lng: -43.011509 }, // Curva Bucar Neto
    { lat: -6.772464, lng: -43.011474 }, // Curva Bucar Neto
    { lat: -6.772669, lng: -43.011177 }, // Curva Bucar Neto
    { lat: -6.772918, lng: -43.010676 }, // Curva Bucar Neto
    { lat: -6.773185, lng: -43.010328 }, //
    { lat: -6.773766, lng: -43.009674 }, //
    { lat: -6.775633, lng: -43.007673 }, //
    { lat: -6.776035, lng: -43.00742 }, //
    { lat: -6.778961, lng: -43.004335 }, //
    { lat: -6.780123, lng: -43.003108 }, //
    { lat: -6.781243, lng: -43.001722 }, //
    { lat: -6.782593, lng: -42.999757 }, //
    { lat: -6.783535, lng: -42.998232 }, //
    { lat: -6.786682, lng: -42.993461 }, // Terminal Rodoviario
    { lat: -6.786826, lng: -42.993354 }, //
    { lat: -6.787027, lng: -42.993179 }, //
    { lat: -6.787357, lng: -42.992785 }, //
    { lat: -6.787658, lng: -42.992307 }, //
    { lat: -6.78764, lng: -42.992219 }, //
    { lat: -6.787513, lng: -42.992149 }, //
    { lat: -6.787416, lng: -42.992167 }, //
    { lat: -6.78678, lng: -42.992981 }, //
    { lat: -6.786787, lng: -42.993145 }, //
    { lat: -6.786734, lng: -42.993309 }, //
    { lat: -6.786684, lng: -42.993432 }, // Terminal Rodoviario
    { lat: -6.784158, lng: -42.997216 }, //
    { lat: -6.782589, lng: -42.99963 }, //
    { lat: -6.781211, lng: -43.001706 }, //
    { lat: -6.779025, lng: -43.004223 }, //
    { lat: -6.776035, lng: -43.007353 }, //
    { lat: -6.775657, lng: -43.007599 }, //
    { lat: -6.775199, lng: -43.0081 }, // Semáforo
    { lat: -6.784567, lng: -43.015596 }, //
    { lat: -6.784569, lng: -43.015687 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.776943, lng: -43.033087 }, // Rotatória Trevo I
    { lat: -6.776927, lng: -43.033178 }, // Rotatória Trevo I
    { lat: -6.776982, lng: -43.033242 }, // Rotatória Trevo I
    { lat: -6.777049, lng: -43.033247 }, // Rotatória Trevo I
    { lat: -6.777103, lng: -43.033226 }, // Rotatória Trevo I
    { lat: -6.777237, lng: -43.033283 }, // Trevo I
    { lat: -6.777348, lng: -43.033316 }, //
    { lat: -6.777737, lng: -43.033511 }, //
    { lat: -6.778644, lng: -43.034583 }, //
    { lat: -6.780254, lng: -43.036431 }, //
    { lat: -6.782003, lng: -43.038477 }, //
    { lat: -6.784334, lng: -43.041123 }, //
    { lat: -6.784985, lng: -43.041802 }, //
    { lat: -6.786093, lng: -43.042773 }, // UFPI - Portão
    { lat: -6.787119, lng: -43.041498 }, // UFPI - Fim da rota
  ],
  titulosRota17h: [
    { titulo: 'Universidade Federal do Piauí' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Agespisa' },
    { titulo: 'TV Alvorada' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Posto Fiscal Pontões' },
    { titulo: 'Posto Fiscal - Barão de Grajaú' },
    { titulo: 'Posto Tropical' },
    { titulo: 'Hospital' },
    { titulo: 'Posto R.Sá' },
    { titulo: 'Sorvetes Quick' },
    { titulo: 'Agespisa' },
    { titulo: 'Fartote Freitas' },
    { titulo: 'Procuradoria Federal' },
    { titulo: 'Universidade Federal do Piauí' },
  ],
  coordenadasRota17h: [
    { lat: -6.787119, lng: -43.041498 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.779149, lng: -43.01134 },
    { lat: -6.763243, lng: -43.010186 },
    { lat: -6.755066, lng: -43.01447 },
    { lat: -6.755124, lng: -43.019727 },
    { lat: -6.754217, lng: -43.026155 },
    { lat: -6.779149, lng: -43.01134 },
    { lat: -6.78413, lng: -43.015314 },
    { lat: -6.782775, lng: -43.019943 },
    { lat: -6.781115, lng: -43.023631 },
    { lat: -6.777721, lng: -43.031453 },
    { lat: -6.787119, lng: -43.041498 },
  ],
  horario17: [
    { hora: '17:05h' },
    { hora: '17:08h' },
    { hora: '17:09h' },
    { hora: '17:11h' },
    { hora: '17:14h' },
    { hora: '17:16h' },
    { hora: '17:21h' },
    { hora: '17:23h' },
    { hora: '17:25h' },
    { hora: '17:31h' },
    { hora: '17:33h' },
    { hora: '17:35h' },
    { hora: '17:37h' },
    { hora: '17:39h' },
    { hora: '17:44h' },
  ],
  lineRota17h: [
    { lat: -6.763259, lng: -43.010237 }, // Inícioo
    { lat: -6.761276, lng: -43.01093 }, // Ponte Pi - Ma
    { lat: -6.757292, lng: -43.012412 }, // BR230
    { lat: -6.756615, lng: -43.012765 }, //
    { lat: -6.756237, lng: -43.013039 }, //
    { lat: -6.755843, lng: -43.013424 }, //
    { lat: -6.755392, lng: -43.01402 }, //
    { lat: -6.755089, lng: -43.014636 }, //
    { lat: -6.754873, lng: -43.01538 }, //
    { lat: -6.754817, lng: -43.015951 }, //
    { lat: -6.754871, lng: -43.016824 }, //
    { lat: -6.755027, lng: -43.018185 }, //
    { lat: -6.755202, lng: -43.019675 }, //
    { lat: -6.755366, lng: -43.021486 }, //
    { lat: -6.755384, lng: -43.022179 }, //
    { lat: -6.755315, lng: -43.022745 }, //
    { lat: -6.755147, lng: -43.023332 }, //
    { lat: -6.754814, lng: -43.02437 }, //
    { lat: -6.754198, lng: -43.026248 }, //
    { lat: -6.754251, lng: -43.026395 }, //
    { lat: -6.754345, lng: -43.026411 }, //
    { lat: -6.754418, lng: -43.026351 }, //
    { lat: -6.754405, lng: -43.026269 }, //
    { lat: -6.754354, lng: -43.026221 }, //
    { lat: -6.754256, lng: -43.026231 }, //
    { lat: -6.754202, lng: -43.026223 }, // BR230
    { lat: -6.754256, lng: -43.026231 }, //
    { lat: -6.754354, lng: -43.026221 }, //
    { lat: -6.754405, lng: -43.026269 }, //
    { lat: -6.754418, lng: -43.026351 }, //
    { lat: -6.754345, lng: -43.026411 }, //
    { lat: -6.754251, lng: -43.026395 }, //
    { lat: -6.754198, lng: -43.026248 }, //
    { lat: -6.754814, lng: -43.02437 }, //
    { lat: -6.755147, lng: -43.023332 }, //
    { lat: -6.755315, lng: -43.022745 }, //
    { lat: -6.755384, lng: -43.022179 }, //
    { lat: -6.755366, lng: -43.021486 }, //
    { lat: -6.755202, lng: -43.019675 }, //
    { lat: -6.755027, lng: -43.018185 }, //
    { lat: -6.754871, lng: -43.016824 }, //
    { lat: -6.754817, lng: -43.015951 }, //
    { lat: -6.754873, lng: -43.01538 }, //
    { lat: -6.755089, lng: -43.014636 }, //
    { lat: -6.755392, lng: -43.01402 }, //
    { lat: -6.755843, lng: -43.013424 }, //
    { lat: -6.756237, lng: -43.013039 }, //
    { lat: -6.756615, lng: -43.012765 }, //
    { lat: -6.757292, lng: -43.012412 }, // BR230
    { lat: -6.761276, lng: -43.01093 }, // Ponte Pi - Ma
    { lat: -6.76384, lng: -43.010056 }, // BR230
    { lat: -6.766963, lng: -43.008926 }, // BR230
    { lat: -6.772377, lng: -43.006953 }, // Curva BR343 - BR230
    { lat: -6.772636, lng: -43.007185 }, // Curva BR343 - BR230
    { lat: -6.772861, lng: -43.007413 }, // Curva BR343 - BR230
    { lat: -6.77317, lng: -43.00755 }, // Curva BR343
    { lat: -6.773507, lng: -43.007526 }, //
    { lat: -6.773839, lng: -43.007454 }, //
    { lat: -6.774049, lng: -43.007445 }, //
    { lat: -6.774301, lng: -43.007492 }, //
    { lat: -6.774601, lng: -43.007611 }, // Curva BR343
    { lat: -6.775199, lng: -43.0081 }, // Semáforo
    { lat: -6.784567, lng: -43.015596 }, //
    { lat: -6.784569, lng: -43.015687 }, //
    { lat: -6.782619, lng: -43.02035 }, //
    { lat: -6.777226, lng: -43.032699 }, //
    { lat: -6.777008, lng: -43.033038 }, //
    { lat: -6.776943, lng: -43.033087 }, // Rotatória Trevo I
    { lat: -6.776927, lng: -43.033178 }, // Rotatória Trevo I
    { lat: -6.776982, lng: -43.033242 }, // Rotatória Trevo I
    { lat: -6.777049, lng: -43.033247 }, // Rotatória Trevo I
    { lat: -6.777103, lng: -43.033226 }, // Rotatória Trevo I
    { lat: -6.777237, lng: -43.033283 }, // Trevo I
    { lat: -6.777348, lng: -43.033316 }, //
    { lat: -6.777737, lng: -43.033511 }, //
    { lat: -6.778644, lng: -43.034583 }, //
    { lat: -6.780254, lng: -43.036431 }, //
    { lat: -6.782003, lng: -43.038477 }, //
    { lat: -6.784334, lng: -43.041123 }, //
    { lat: -6.784985, lng: -43.041802 }, //
    { lat: -6.786093, lng: -43.042773 }, // UFPI - Portão
    { lat: -6.787119, lng: -43.041498 }, // UFPI - Fim da rota
  ],
}
