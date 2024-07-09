export interface GetDeploymentRequest {
    /**
     * DataWorks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。
     * 该参数与ProjectId参数二者必须设置其一，以确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 发布包的ID。执行[SubmitFile](~~173944~~) 和[DeployFile](~~173956~~)时，都会生成一个对应的发布包ID。
     * @example `3000001`
     */
    "DeploymentId": number;
}
