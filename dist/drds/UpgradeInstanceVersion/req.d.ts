export interface UpgradeInstanceVersionRequest {
    /**
     * 实例ID。
     * @example `drdshbgaen89****`
     */
    "DrdsInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 版本号，无需填写。
     * @example `t-drds-server-5.4.12-16348095.noarch.rpm`
     */
    "Rpm"?: string;
}
