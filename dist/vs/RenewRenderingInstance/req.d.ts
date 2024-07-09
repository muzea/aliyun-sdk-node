export interface RenewRenderingInstanceRequest {
    /**
     * 开启或关闭自动续费，取值：
     * * **true**：开启。
     * * **false**。关闭。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 包年包月的时长。 取值范围 1(默认) 2 3 4 5 6 7 8 9 12当选12的时候会被换算为一年，其余以月为周期单位
     * @example `1`
     */
    "Period"?: string;
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId": string;
}
