// Importer toutes les méthodes que l'on souhaite utiliser
import { vi } from 'vitest'
// Importer la dépendance qui nous permet de mount un composant
import { mount } from "@vue/test-utils";
// Récupération du composant que l'on souhaite tester
import App from "../src/App.vue";

// vi.mock(...) : on intercepte l'import de @capacitor/local-notifications pour fournir une fausse version.
// .mockResolvedValue(...) : on retourne une promesse résolue simulant la permission "granted".
// vi.fn() est la version Vitest de jest.fn()
// C'est une fonction factice (mock function) qui te permet de : simuler une fonction réelle,
// enregistrer les appels (arguments, nombre d'appels...), contrôler son comportement (returnValue, resolvedValue, etc.)

vi.mock('@capacitor/local-notifications', () => ({
    LocalNotifications: {
        requestPermissions: vi.fn().mockResolvedValue({ display: 'granted' }),
    },
}));

// describe nous permet de créer un groupe de plusieurs tests qui répondront à une description

describe('Check if there is a "Add" button', () => {
    test('There is a "Add" button', async () => {
        // Mount du composant complet que l'on souhaite tester
        const wrapper = mount(App);
        // On récupère exactement la partie que l'on souhaite tester ( ici un bouton )
        const button = wrapper.find("button.new-reminder");

        // await new Promise(...) : on laisse le temps à onMounted() de finir son async/await (sinon le test pourrait continuer trop vite).
        await new Promise(resolve => setTimeout(resolve, 0));

        // On vérifie que le bouton a été trouvé
        expect(button.exists()).toBe(true);
        // On vérifie que le texte est bien "Add"
        expect(button.text()).toBe('Add');
    })
})

// Basic method test
import { sum } from './ressources/sum.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})