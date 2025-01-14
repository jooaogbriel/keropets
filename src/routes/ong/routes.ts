import { Router } from "express";

import ongCreateController from "../../controllers/ong/ongCreate.controller";
import ongDeleteController from "../../controllers/ong/ongDelete.controller";
import ongUpdateController from "../../controllers/ong/ongUpdate.controller";
import ongListController from "../../controllers/ong/ongList.controller";
import ongListByIdController from "../../controllers/ong/ongListById.controller";


const ongRoutes = Router();
ongRoutes.post(
    "",
    ongCreateController
)
ongRoutes.patch("/:id", ongUpdateController)
ongRoutes.delete("/:id", ongDeleteController)
ongRoutes.get(
    "",
    ongListController
)
ongRoutes.get(
    "/:id",
    ongListByIdController
)

export default ongRoutes;