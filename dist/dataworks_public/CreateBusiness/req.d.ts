export interface CreateBusinessRequest {
    /**
     * DataWorks工作空间的ID，您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面查看ID。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的唯一标识符（即工作空间名称）。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面查看名称。
     * 该参数与projectId参数二者必须设置其一，以确定本次API调用操作的DataWorks项目。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 业务流程名称，同一个项目空间下的业务流程名称必须唯一。
     * @example `我的业务流程`
     */
    "BusinessName": string;
    /**
     * 业务流程的描述信息。
     * @example `这是一个通过接口创建的业务流程`
     */
    "Description"?: string;
    /**
     * 业务流程对应责任人的阿里云账号ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，鼠标悬停至顶部菜单栏右侧的用户头像，查看账号ID。如果该参数为空，则默认使用调用者的阿里云账号ID。
     * @example `1000000000001`
     */
    "Owner"?: string;
    /**
     * 业务流程所属的功能模块。取值如下：
     * - NORMAL（数据开发）
     * - MANUAL_BIZ（手动业务流程）
     * @example `NORMAL`
     */
    "UseType"?: string;
}
