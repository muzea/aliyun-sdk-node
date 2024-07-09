import { CreateAsyncPredictRequest } from "./CreateAsyncPredict/req";
import { CreateAsyncPredictResponse } from "./CreateAsyncPredict/res";
import { GetAsyncPredictRequest } from "./GetAsyncPredict/req";
import { GetAsyncPredictResponse } from "./GetAsyncPredict/res";
import { GetPredictResultRequest } from "./GetPredictResult/req";
import { GetPredictResultResponse } from "./GetPredictResult/res";
import { RunPreTrainServiceRequest } from "./RunPreTrainService/req";
import { RunPreTrainServiceResponse } from "./RunPreTrainService/res";

interface NLP_AUTOML {
    /**
     * 调用CreateAsyncPredict创建一个异步预测。
     */
    CreateAsyncPredict(query: CreateAsyncPredictRequest): Promise<CreateAsyncPredictResponse>;
    /**
     * 调用GetAsyncPredict获取异步预测结果。
     */
    GetAsyncPredict(query: GetAsyncPredictRequest): Promise<GetAsyncPredictResponse>;
    /**
     * 调用GetPredictResult获取模型预测结果。
     */
    GetPredictResult(query: GetPredictResultRequest): Promise<GetPredictResultResponse>;
    /**
     * 调用预训练模型服务。
     */
    RunPreTrainService(query: RunPreTrainServiceRequest): Promise<RunPreTrainServiceResponse>;
}
export default NLP_AUTOML;
