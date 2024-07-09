export interface UpgradeInstanceVersionRequest {
    /**
     * 实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * 目标开源版本。可取值为：
     * - **0.10.2**
     * - **2.2.0**
     * 如果填写值为同版本，会触发升级到最新小版本。
     * @example `0.10.2`
     */
    "TargetVersion": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
