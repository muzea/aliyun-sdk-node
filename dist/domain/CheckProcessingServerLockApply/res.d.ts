export interface CheckProcessingServerLockApplyResponse {
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
     */
    RequestId: string;
    /**
     * 域名在注册局是否存在锁服务申请为**处理中**的状态。取值：
     * - true：存在
     * - false：不存在
     * @example `true`
     */
    Exists: boolean;
}
