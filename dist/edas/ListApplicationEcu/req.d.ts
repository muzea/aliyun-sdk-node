export interface ListApplicationEcuRequest {
    /**
     * 应用ID。获取AppId，请参见[ListApplication](~~149390~~)。
     * @example `e809****-43d7-4c6b-8e01-b0d9d1db****`
     */
    "AppId"?: string;
    /**
     * 微服务空间ID。
     * @example `cn-hangzhou:***wei`
     */
    "LogicalRegionId"?: string;
}
