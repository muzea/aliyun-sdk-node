export interface CreateTriggerRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 输入的数据源配置。
     */
    "Input": any;
    /**
     * 处理模板列表。
     */
    "Actions": {
        /**
         * 模板名字。
         * @example `doc/convert`
         */
        Name: string;
        /**
         * 模板参数列表。
         */
        Parameters: string[];
        /**
         * 快速失败执行策略配置。
         */
        FastFailPolicy: any;
    }[];
    /**
     * 消息通知对象，支持多种消息中间件，消息格式详情请见异步通知消息格式，请选择其中一种方式接收消息，使用方式如下所示：
     * 在与智能媒体管理相同的地域下开通并接入事件总线EventBridge服务，及时获取任务信息通知。更多信息，请参见智能媒体管理IMM事件。 在与智能媒体管理相同的地域下开通MNS服务，并配置订阅关系。
     */
    "Notification"?: {
        /**
         * MNS通知参数对象。
         */
        MNS: any;
    };
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{"key":"val"}`
     */
    "Tags"?: any;
    /**
     * 服务角色，授权给IMM服务以访问其他云资源（例如OSS）的权限，默认值为AliyunIMMBatchTriggerRole。
     * 如果要自定义服务角色，您可以通过RAM控制台创建普通服务角色并为角色授权。具体操作，请分别参见[创建普通服务角色](~~116800~~)和[为角色授权](~~116147~~)。
     * @example `AliyunIMMBatchTriggerRole`
     */
    "ServiceRole": string;
}
