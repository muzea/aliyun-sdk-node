export interface ModifyDBInstanceClassRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 变配目标规格：
     * - **polarx.x4.medium.2e**：2核8G
     * - **polarx.x4.large.2e**：4核16G
     * - **polarx.x8.large.2e**：4核32G
     * - **polarx.x4.xlarge.2e**：8核32G
     * - **polarx.x8.xlarge.2e**：8核64G
     * - **polarx.x4.2xlarge.2e**：16核64G
     * - **polarx.x8.2xlarge.2e**：16核128G
     * - **polarx.x4.4xlarge.2e**：32核128G
     * - **polarx.x8.4xlarge.2e**：32核256G
     * - **polarx.st.8xlarge.2e**：60核470G
     * - **polarx.st.12xlarge.2e**：90核720G
     * @example `polarx.x4.xlarge.2e`
     */
    "TargetDBInstanceClass"?: string;
    /**
     * 客户端token，保证唯一任意字符串。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    "ClientToken"?: string;
    /**
     * 计算节点规格。
     * @example `4核32G`
     */
    "CnClass"?: string;
    /**
     * 存储节点规格。
     * @example `4核32G`
     */
    "DnClass"?: string;
    "SpecifiedDNScale"?: boolean;
    "SpecifiedDNSpecMapJson"?: string;
    "SwitchTimeMode"?: string;
    "SwitchTime"?: string;
}
