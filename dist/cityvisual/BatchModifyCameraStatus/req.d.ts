interface BatchModifyCameraStatusRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 视频点位ID。
    * 取值可以由多个视频点位ID组成一个JSON数组，ID之间用半角逗号（,）隔开。
    * @example `["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"]`
    */ "CameraIds": string;
    /**
    * 接流工作组ID。
    * @example `123`
    */ "WorkGroupId": string;
    /**
    * 待修改的视频点位状态。 取值范围：
    * *	ON_LINE: 接流
    * *	OFF_LINE: 断流
    * @example `ON_LINE`
    */ "StreamStatus": string;
}
export { BatchModifyCameraStatusRequest };