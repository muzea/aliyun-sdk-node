interface QueryCallDetailByCallIdRequest {
    "RegionId"?: string;
    /**
    * 通话的唯一识别ID。调用其他外呼接口发起通话后，返回参数中会携带**CallId**。
    * @example `116014888060^102816313060`
    */ "CallId": string;
    /**
    * 产品ID。
    * - **11000000300006**：语音通知。
    * - **11010000138001**：语音验证码。
    * - **11000000300005**：IVR。
    * - **11000000300004**：点击拨号。
    * - **11000000300009**：SIP。
    * - **11030000180001**：智能外呼。
    * @example `11000000300006`
    */ "ProdId": number;
    /**
    * 指定通话发生的时间，格式为Unix时间戳，单位毫秒。会查询这个时间点对应的一整天的记录。
    * @example `1553774465`
    */ "QueryDate": number;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { QueryCallDetailByCallIdRequest };