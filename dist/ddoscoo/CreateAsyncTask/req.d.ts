export interface CreateAsyncTaskRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 要创建的任务类型。取值：
     * - **1**：四层导出任务，导出DDoS高防实例的端口转发规则
     * - **2**：七层导出任务，导出网站业务转发规则
     * - **3**：会话、健康检查导出任务，导出DDoS高防实例的会话、健康检查配置
     * - **4**：DDoS防护策略导出任务，导出DDoS高防实例的DDoS防护策略配置
     * - **5**：黑名单（针对目的IP）下载任务，导出针对DDoS高防实例的黑名单IP
     * - **6**：白名单（针对目的IP）下载任务，导出针对DDoS高防实例的白名单IP
     * @example `5`
     */
    "TaskType": number;
    /**
     * 任务参数信息。使用JSON格式的字符串表达。不同**TaskType**需要传入的任务参数不完全相同。
     * **TaskType**为**1**、**3**、**4**、**5**、**6**时，任务参数的结构如下。
     * - **instanceId**：String类型，必选，DDoS高防实例的ID。
     * **TaskType**为**2**时，任务参数的结构如下。
     * - **domain**：String类型，可选，网站业务的域名。不传入表示导出所有网站业务的转发规则。
     * @example `{"instanceId": "ddoscoo-cn-mp91j1ao****"}`
     */
    "TaskParams": string;
}
