export interface QueryJenkinsImageRegistryPersistenceDayResponse {
    /**
     * 仓库保留时长。单位：天。
     * @example `30`
     */
    Data: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EA4AC8B7-0C18-5BC1-9DA4-798B3BE4****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 执行花费的时间。单位：秒。
     * @example `1`
     */
    TimeCost: number;
}
