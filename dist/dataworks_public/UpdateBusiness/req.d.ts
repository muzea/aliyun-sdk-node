export interface UpdateBusinessRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间名称。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间名称。该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 业务流程的名称。您可以调用[ListBusiness](~~173945~~)接口获取。
     * @example `MyBusiness`
     */
    "BusinessName"?: string;
    /**
     * 业务流程的描述信息。
     * @example `modified from my first business`
     */
    "Description"?: string;
    /**
     * 业务流程的责任人。您可以调用[ListBusiness](~~173945~~)接口获取。
     * @example `348428****`
     */
    "Owner"?: string;
    /**
     * 业务流程的ID，您可以调用[ListBusiness](~~173945~~)接口获取。
     * @example `300000`
     */
    "BusinessId": number;
}
