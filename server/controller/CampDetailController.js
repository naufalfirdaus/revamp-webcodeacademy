import curriculum from "../models/curriculum";
import { sequelize } from "../models/init-models";

const findAllRows = async (req, res, next) => {
  try {
    const result = await req.context.models.curriculum.findAll();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

const findDetail = async (req, res) => {
  try {
    const curriculum = await req.context.models.curriculum.findOne({
      where: { curr_id: req.params.id },
    });

    const materi = await req.context.models.curriculum_materi
      .findAll()
      .filter((id) => id.cuma_curr_id == req.params.id);

    const instructor = await req.context.models.instructor
      .findAll()
      .filter((id) => id.inst_bootcamp == curriculum.dataValues.curr_name);

    const allBatch = await req.context.models.batch
      .findAll()
      .filter((id) => id.batch_technology == curriculum.dataValues.curr_name);

    const totalBatch = allBatch.length;
    const batch = allBatch[totalBatch - 1];

    const hasil = { curriculum, materi, instructor, batch };
    res.send(hasil);
  } catch (error) {
    return res.sendStatus(404).json("no data found");
  }
};

const findRow = async (req, res) => {
  try {
    const curriculum = await req.context.models.curriculum.findOne({
      where: { curr_id: req.params.id },
    });

    const materi = await req.context.models.curriculum_materi.findAll({
      where: { cuma_curr_id : req.params.id },
    });

    const instructor = await req.context.models.instructor.findAll({
      where: { inst_bootcamp: curriculum.dataValues.curr_name },
    });

    const allBatch = await req.context.models.batch
    .findAll({
      where: { batch_technology: curriculum.dataValues.curr_name},
    })

    const totalBatch = allBatch.length;
    const batch = allBatch[totalBatch - 1];

    const hasil = { curriculum, materi, instructor, batch };

    // console.log(others);
    return res.send(hasil);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {
  findAllRows,
  findRow,
  findDetail,
};