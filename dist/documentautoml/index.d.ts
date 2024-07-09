import { PredictTemplateModelRequest } from "./PredictTemplateModel/req";
import { PredictTemplateModelResponse } from "./PredictTemplateModel/res";
import { PredictModelRequest } from "./PredictModel/req";
import { PredictModelResponse } from "./PredictModel/res";
import { PredictClassifierModelRequest } from "./PredictClassifierModel/req";
import { PredictClassifierModelResponse } from "./PredictClassifierModel/res";
import { CreateModelAsyncPredictRequest } from "./CreateModelAsyncPredict/req";
import { CreateModelAsyncPredictResponse } from "./CreateModelAsyncPredict/res";
import { GetModelAsyncPredictRequest } from "./GetModelAsyncPredict/req";
import { GetModelAsyncPredictResponse } from "./GetModelAsyncPredict/res";
import { PredictPreTrainModelRequest } from "./PredictPreTrainModel/req";
import { PredictPreTrainModelResponse } from "./PredictPreTrainModel/res";

interface DOCUMENTAUTOML {
    /**
     * 模板服务预测目前包括两种类型：自定义KV模板和自定义表格模板。
     */
    PredictTemplateModel(query: PredictTemplateModelRequest): Promise<PredictTemplateModelResponse>;
    /**
     * 模型预测分为三种类型：长文档信息抽取、单票据信息抽取、表格信息抽取。
     */
    PredictModel(query: PredictModelRequest): Promise<PredictModelResponse>;
    /**
     * 文档自学习分类器预测接口。
     */
    PredictClassifierModel(query: PredictClassifierModelRequest): Promise<PredictClassifierModelResponse>;
    /**
     * 文档自学习创建异步预测任务接口。
     */
    CreateModelAsyncPredict(query: CreateModelAsyncPredictRequest): Promise<CreateModelAsyncPredictResponse>;
    /**
     * 模型预测分为三种类型：长文档信息抽取、单票据信息抽取、表格信息抽取。
     */
    GetModelAsyncPredict(query: GetModelAsyncPredictRequest): Promise<GetModelAsyncPredictResponse>;
    /**
     * 预置能力现有：UIE抽取，适用于通用智能预标注。
     */
    PredictPreTrainModel(query: PredictPreTrainModelRequest): Promise<PredictPreTrainModelResponse>;
}
export default DOCUMENTAUTOML;
