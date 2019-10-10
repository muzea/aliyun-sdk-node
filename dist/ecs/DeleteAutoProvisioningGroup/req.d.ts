interface DeleteAutoProvisioningGroupRequest {
    /**
    * 弹性供应组所在地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性供应组的ID。
    * @example `apg-uf6jel2bbl62wh13****`
    */ "AutoProvisioningGroupId": string;
    /**
    * 删除弹性供应组时是否释放组内实例，可选值：
    * - **true**：释放组内实例。
    * - **false**：组内实例继续运行。
    * @example `true`
    */ "TerminateInstances": boolean;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
}
export { DeleteAutoProvisioningGroupRequest };