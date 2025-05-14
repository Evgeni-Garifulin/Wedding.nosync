interface ImageSet {
	name: string;
}

import alexandraRegueros from './alexandraRegueros';
import anatAssaf from './anatAssaf';
import yogevGoldis from './yogevGoldis';
import haiHarari from './haiHarari';
import enikoSzokol from './enikoSzokol';
import kristinaKutasova from './kristinaKutasova';
import tomGuy from './tomGuy';
import mandeepBajwa from './mandeepBajwa';
import veronikaMikhailova from './veronikaMikhailova';
import efratDagan from './efratDagan';
import kerstinRothermel from './kerstinRothermel';

// Массив изображений
const images: ImageSet[] = [
	{ name: 'alexandraRegueros', ...alexandraRegueros },
	{ name: 'anatAssaf', ...anatAssaf },
	{ name: 'yogevGoldis', ...yogevGoldis },
	{ name: 'haiHarari', ...haiHarari },
	{ name: 'enikoSzokol', ...enikoSzokol },
	{ name: 'kristinaKutasova', ...kristinaKutasova },
	{ name: 'tomGuy', ...tomGuy },
	{ name: 'mandeepBajwa', ...mandeepBajwa },
	{ name: 'veronikaMikhailova', ...veronikaMikhailova },
	{ name: 'efratDagan', ...efratDagan },
	{ name: 'kerstinRothermel', ...kerstinRothermel },
];

export default images;