export interface CreateWorkitemV2Request {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 工作项标题
         * @example `测试工作项`
         */
        subject: string;
        /**
         * 描述，描述区上传图片，推荐只上传小于1M的图片，请在接口description字段中插入如下格式：
         * \<img src="data:image/png;base64,*****************************"/>  其中******为图片内容的base64编码，png为图片的格式，按实际图片格式填写即可
         * @example `测试内容`
         */
        description: string;
        /**
         * 负责人id
         * @example `19xxxx31947xxxx`
         */
        assignedTo: string;
        /**
         * 项目唯一标识
         * @example `asd345xxxxx9q9845xxxxx34`
         */
        spaceIdentifier: string;
        /**
         * 工作项的类型id，枚举值为：Req、Bug、Task、Topic
         * @example `Req`
         */
        category: string;
        /**
         * 工作项类型id，可以通过[获取工作项类型接口](https://help.aliyun.com/document_detail/460485.html)，查看对应项目下有哪些工作项类型可以选择
         * @example `9uy29901re573f561d69jn40`
         */
        workitemTypeIdentifier: string;
        /**
         * 字段值列表，可以通过[获取工作项字段列表接口](https://help.aliyun.com/document_detail/460486.html)获取对应工作项类型有哪些字段可以设置
         */
        fieldValueList: {
            /**
             * 字段唯一标识
             * @example `6aexxxxxa1d98c09c60xxxx16`
             */
            fieldIdentifier: string;
            /**
             * 字段值
             * @example `10`
             */
            value: string;
        }[];
        /**
         * 父工作项id
         * @example `11223331122`
         */
        parentIdentifier: string;
        /**
         * 版本列表，填写版本的唯一标识列表
         */
        versions: string[];
        /**
         * 迭代的唯一标识id
         * @example `455532323455`
         */
        sprintIdentifier: string;
        /**
         * 标签列表，填写标签唯一标识列表
         */
        tags: string[];
        /**
         * 抄送人account id列表
         */
        trackers: string[];
        /**
         * 参与人account id列表
         */
        participants: string[];
        /**
         * 验证者的account id
         * @example `1561159309......`
         */
        verifier: string;
    };
}
