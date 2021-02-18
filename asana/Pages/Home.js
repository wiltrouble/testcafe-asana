import { Selector } from "../e2e/Login/node_modules/testcafe";

class Home {

    constructor() {
        this.newProjectButton = Selector('.TileStructure-children');
        this.blankProject = Selector('.FlowPickerTile path.DashedTile-inner');
    }

    clickBlankProject = async () => await t.click(this.blankProject)
}