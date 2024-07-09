import { DetectMainBodyRequest } from "./DetectMainBody/req";
import { DetectMainBodyResponse } from "./DetectMainBody/res";
import { DetectObjectRequest } from "./DetectObject/req";
import { DetectObjectResponse } from "./DetectObject/res";
import { DetectWhiteBaseImageRequest } from "./DetectWhiteBaseImage/req";
import { DetectWhiteBaseImageResponse } from "./DetectWhiteBaseImage/res";
import { DetectVehicleICongestionRequest } from "./DetectVehicleICongestion/req";
import { DetectVehicleICongestionResponse } from "./DetectVehicleICongestion/res";
import { DetectVehicleIllegalParkingRequest } from "./DetectVehicleIllegalParking/req";
import { DetectVehicleIllegalParkingResponse } from "./DetectVehicleIllegalParking/res";
import { DetectIPCObjectRequest } from "./DetectIPCObject/req";
import { DetectIPCObjectResponse } from "./DetectIPCObject/res";
import { GetAsyncJobResultRequest } from "./GetAsyncJobResult/req";
import { GetAsyncJobResultResponse } from "./GetAsyncJobResult/res";
import { DetectVideoIPCObjectRequest } from "./DetectVideoIPCObject/req";
import { DetectVideoIPCObjectResponse } from "./DetectVideoIPCObject/res";
import { DetectWorkwearRequest } from "./DetectWorkwear/req";
import { DetectWorkwearResponse } from "./DetectWorkwear/res";
import { DetectKitchenAnimalsRequest } from "./DetectKitchenAnimals/req";
import { DetectKitchenAnimalsResponse } from "./DetectKitchenAnimals/res";

interface OBJECTDET {
    /**
     * 本文档介绍主体检测DetectMainBody的语法及示例。
     */
    DetectMainBody(query: DetectMainBodyRequest): Promise<DetectMainBodyResponse>;
    /**
     * 本文介绍物体检测DetectObject的语法及示例。
     */
    DetectObject(query: DetectObjectRequest): Promise<DetectObjectResponse>;
    /**
     * 本文介绍白底图检测DetectWhiteBaseImage的语法及示例。
     */
    DetectWhiteBaseImage(query: DetectWhiteBaseImageRequest): Promise<DetectWhiteBaseImageResponse>;
    /**
     * 本文为您介绍车辆拥堵检测DetectVehicleICongestion的语法及示例。
     */
    DetectVehicleICongestion(query: DetectVehicleICongestionRequest): Promise<DetectVehicleICongestionResponse>;
    /**
     * 本文为您介绍车辆违停检测DetectVehicleIllegalParking的语法及示例。
     */
    DetectVehicleIllegalParking(query: DetectVehicleIllegalParkingRequest): Promise<DetectVehicleIllegalParkingResponse>;
    /**
     * 基于图像的IPC目标检测。
     */
    DetectIPCObject(query: DetectIPCObjectRequest): Promise<DetectIPCObjectResponse>;
    /**
     * 本文介绍查询异步任务结果GetAsyncJobResult的语法及示例。
     */
    GetAsyncJobResult(query: GetAsyncJobResultRequest): Promise<GetAsyncJobResultResponse>;
    /**
     * 基于短视频的IPC目标检测。
     */
    DetectVideoIPCObject(query: DetectVideoIPCObjectRequest): Promise<DetectVideoIPCObjectResponse>;
    /**
     * 本文为您介绍着装检测。
     */
    DetectWorkwear(query: DetectWorkwearRequest): Promise<DetectWorkwearResponse>;
    /**
     * 本文为您介绍猫鼠识别。
     */
    DetectKitchenAnimals(query: DetectKitchenAnimalsRequest): Promise<DetectKitchenAnimalsResponse>;
}
export default OBJECTDET;
