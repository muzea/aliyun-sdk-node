export interface QueryDomainSpecialBizDetailResponse {
    /**
     * 唯一请求识别码
     * @example `A83E1D74-E46B-505C-947A-8C6B7E41C011`
     */
    RequestId: string;
    /**
     * 直接指定返回的Http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误Code
     * @example `-`
     */
    DynamicCode: string;
    /**
     * 动态错误信息
     * @example `-`
     */
    DynamicMessage: string;
    /**
     * 是否同步处理
     * @example `true`
     */
    Synchro: boolean;
    /**
     * 错误信息
     * @example `110001`
     */
    ErrorMsg: string;
    /**
     * 错误码
     * @example `参数错误`
     */
    ErrorCode: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回对象
     */
    Module: {
        /**
         * 主键
         * @example `34083`
         */
        Id: number;
        /**
         * 创建时间
         * @example `2023-03-21 15:10:04.0`
         */
        GmtCreate: string;
        /**
         * 修改时间
         * @example `2023-03-21 15:10:04.0`
         */
        GmtModified: string;
        /**
         * 业务名称
         * @example `GOV.CN域名注册(test003.cn)`
         */
        BizName: string;
        /**
         * 业务编号
         * @example `A83E1D74-E46B-505C-947A-8C6B7E41C012`
         */
        BizNo: string;
        /**
         * 域名
         * @example `test003.cn`
         */
        DomainName: string;
        /**
         * 实例ID
         * @example `S20172315BJ37809`
         */
        SaleId: string;
        /**
         * 用户ID
         * @example `121000000****`
         */
        UserId: string;
        /**
         * 产品id
         * @example `1`
         */
        ProductId: string;
        /**
         * 业务类型
         * @example `govRegister`
         */
        BizType: string;
        /**
         * 业务状态
         * @example `REGISTRANT_VSP_AUDIT_SUCCESS`
         */
        BizStatus: string;
        /**
         * 业务状态(用户前端使用)
         * @example `1`
         */
        Status: number;
        /**
         * 业务状态描述(用户前端使用)
         * @example `信息审核成功`
         */
        StatusDesc: string;
        /**
         * 审核信息
         * @example `审核通过`
         */
        AuditMsg: string;
        /**
         * 订单id
         * @example `123`
         */
        OrderId: string;
        /**
         * 更新时间
         * @example `2020-11-17 18:11:15`
         */
        UpdateTime: number;
        /**
         * 创建时间
         * @example `2023-01-17 11:31:10`
         */
        CreateTime: number;
        /**
         * 联系人信息
         */
        DomainSpecialBizContact: {
            /**
             * 业务id
             * @example `258`
             */
            BizId: number;
            /**
             * 类型:1-个人 ,2-企业
             * @example `1`
             */
            RegType: number;
            /**
             * 组织名称
             * @example `河北易迪管道制造有限公司`
             */
            CCompany: string;
            /**
             * 组织名称(英文)
             * @example `hebeihuiheguandaozhizaoyouxiangongsi`
             */
            ECompany: string;
            /**
             * 联系人姓名
             * @example `佟大伟`
             */
            CName: string;
            /**
             * 联系人姓名(英文)
             * @example `tong da wei`
             */
            EName: string;
            /**
             * 国家代码
             * @example `CN`
             */
            CCountry: string;
            /**
             * 省份
             * @example `辽宁`
             */
            CProvince: string;
            /**
             * 省份(英文)
             * @example `liao ning`
             */
            EProvince: string;
            /**
             * 城市
             * @example `鞍山市`
             */
            CCity: string;
            /**
             * 城市(英文)
             * @example `an shan Shi`
             */
            ECity: string;
            /**
             * 地址
             * @example `铁西区新开街59-4号`
             */
            CVenu: string;
            /**
             * 地址(英文)
             * @example `tie xi qu xin kai jie 59-4 hao`
             */
            EVenu: string;
            /**
             * 邮编
             * @example `100000`
             */
            Postalcode: string;
            /**
             * 电子邮箱
             * @example `username@example.com`
             */
            Email: string;
            /**
             * 电话国家代码
             * @example `86`
             */
            TelArea: string;
            /**
             * 区号固定电话或手机号码
             * @example `16604121234`
             */
            TelMain: string;
            /**
             * 电话分机号
             * @example `61284565`
             */
            TelExt: string;
            /**
             * 传真国家代码
             * @example `86`
             */
            FaxArea: string;
            /**
             * 区号传真号或手机号码
             * @example `16604121234`
             */
            FaxMain: string;
            /**
             * 传真分机号
             * @example `61284565`
             */
            FaxExt: string;
            /**
             * 手机号码
             * @example `156********`
             */
            Mobile: string;
            /**
             * 扩展信息
             * @example `-`
             */
            Extend: string;
            /**
             * vsp联系人id
             * @example `121000001****`
             */
            VspContactId: string;
            /**
             * 持有者id
             * @example `121000002****`
             */
            RegistrantId: string;
        };
        /**
         * 证件信息
         */
        DomainSpecialBizCredentials: {
            /**
             * 域名
             * @example `test003.cn`
             */
            DomainName: string;
            /**
             * 实例ID
             * @example `S20172315BJ37809`
             */
            SaleId: string;
            /**
             * 关联流程ID
             * @example `T20220831150014000001`
             */
            BizId: number;
            /**
             * 证件号
             * @example `4111111111111110**`
             */
            CredentialNo: string;
            /**
             * 证件类型
             * @example `SFZ`
             */
            CredentialType: string;
            /**
             * 证件url
             * @example `http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg`
             */
            CredentialUrl: string;
            /**
             * 是否持有者证件
             * @example `1`
             */
            HolderCert: number;
        }[];
        /**
         * 订单信息
         */
        DomainSpecialOrderResult: {
            /**
             * 实例ID
             * @example `S201601063418719`
             */
            SaleId: string;
            /**
             * 订单号
             * @example `S201601060123456`
             */
            OrderId: string;
            /**
             * 子订单号
             * @example `S201601061234567`
             */
            SubOrderId: string;
            /**
             * 费用类型
             * @example `activate`
             */
            ActionType: string;
            /**
             * 订单金额
             * @example `0.0`
             */
            OrderAmount: number;
            /**
             * 币种
             * @example `CNY`
             */
            OrderCurrency: string;
            /**
             * 下单时间
             * @example `2023-09-19T14:28Z`
             */
            OrderTime: string;
            /**
             * 年限
             * @example `1`
             */
            OrderYear: number;
            /**
             * 订单状态
             * @example `ORDER_WAIT_PAY`
             */
            OrderStatus: string;
        };
    };
    /**
     * 是否允许重试
     * @example `False`
     */
    AllowRetry: boolean;
    /**
     * 返回错误参数数组
     */
    ErrorArgs: any[];
    /**
     * 产生errorCode的应用名称
     * @example `test-com`
     */
    AppName: string;
}
