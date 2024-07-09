export interface DeleteAutoProvisioningGroupRequest {
    /**
     * 弹性供应组所在地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性供应组的ID。
     * @example `apg-bpuf6jel2bbl62wh13****`
     */
    "AutoProvisioningGroupId": string;
    /**
     * 删除弹性供应组时是否释放组内实例。取值范围：
     * - true：释放组内实例。
     * - false：组内实例继续运行。
     * >此参数值默认继承于调用`CreateAutoProvisioningGroup`创建弹性供应组时设置的`TerminateInstances`参数值，您也可以在调用本接口删除弹性供应组时，重新设置`TerminateInstances`参数值。
     * @example `true`
     */
    "TerminateInstances"?: boolean;
}
