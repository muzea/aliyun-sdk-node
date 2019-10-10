interface ModifyPersistenceTimeOutRequest {
    "RegionId"?: string;
    /**
    * 要操作的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * 转发端口。
    * @example `255`
    */ "FrontPort": number;
    /**
    * 会话保持时间配置内容（JSON字符串格式），具体结构描述如下：
    * - **persistence_timeout**，Integer类型，必选，设置会话保持时间，单位为秒，取值范围：30-3,600。
    *     > 此处的参数名以小写开头。
    * @example `{"persistence_timeout":400}`
    */ "ConfigJson": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 高防IP策略修改标识。
    * @example `xxxxxxx-xxxx-xxxx-xxxxxxxx`
    */ "LbId"?: string;
}
export { ModifyPersistenceTimeOutRequest };