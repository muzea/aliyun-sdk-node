export interface RollbackApplicationRequest {
    /**
     * 应用ID。
     * @example `474bdef0-d149-4695-abfb-52912d9143f0`
     */
    "AppId": string;
    /**
     * 待回滚的版本号
     * @example `v2-1`
     */
    "FromAppVersion": string;
    /**
     * 目标版本号。默认自动回滚到上一版本。
     * @example `v2`
     */
    "ToAppVersion"?: string;
    /**
     * 回滚的异步操作超时时间。单位：秒。默认值：300。
     * @example `1800`
     */
    "Timeout"?: number;
}
