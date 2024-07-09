import { GetOpenStatusRequest } from "./GetOpenStatus/req";
import { GetOpenStatusResponse } from "./GetOpenStatus/res";
import { GetOrderUsageRequest } from "./GetOrderUsage/req";
import { GetOrderUsageResponse } from "./GetOrderUsage/res";
import { GetOrderInfoRequest } from "./GetOrderInfo/req";
import { GetOrderInfoResponse } from "./GetOrderInfo/res";

interface OPT {
    /**
     * 获取优化求解器内所有服务的开通状态，目前包含数学规划服务。
     */
    GetOpenStatus(query: GetOpenStatusRequest): Promise<GetOpenStatusResponse>;
    /**
     * 获取License使用量。
     */
    GetOrderUsage(query: GetOrderUsageRequest): Promise<GetOrderUsageResponse>;
    /**
     * 获取购买License的信息。
     */
    GetOrderInfo(query: GetOrderInfoRequest): Promise<GetOrderInfoResponse>;
}
export default OPT;
