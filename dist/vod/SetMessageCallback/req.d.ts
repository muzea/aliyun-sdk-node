interface SetMessageCallbackRequest {
    "RegionId"?: string;
    /**
    * 回调方式选择HTTP时，回调地址。
    * @example `http://test.com`
    */ "CallbackURL"?: string;
    "OwnerId"?: string;
    "CallbackSwitch"?: string;
    /**
    * 回调方式，取值：**HTTP** | **MNS**。
    * @example `HTTP`
    */ "CallbackType"?: string;
    /**
    * 回调事件类型，为空时关闭所有消息通知，为ALL时开启全部消息通知。也可指定开启某些消息通知，多个用逗号分隔。取值：[事件类型](https://help.aliyun.com/document_detail/55627.html?spm=a2c4g.11186623.2.15.45eb7ca2afB9e2#MessageCallbackType)。
    * @example `FileUploadComplete`
    */ "EventTypeList"?: string;
    /**
    * 回调方式选择HTTP时，回调鉴权开关，取值：**on**（启用）、**off**（不启用）。
    * @example `on`
    */ "AuthSwitch"?: string;
    /**
    * 回调方式选择HTTP时，鉴权Key，最长32位，必须同时包含大小写字母和数字。
    * @example `dsf346dvet`
    */ "AuthKey"?: string;
    /**
    * 资源所有者ID。
    * @example `324`
    */ "ResourceRealOwnerId"?: number;
    /**
    * 回调方式选择MNS时，消息队列公网Endpoint。
    * @example `endpoint`
    */ "MnsEndpoint"?: string;
    /**
    * 回调方式选择MNS时，消息队列名称。
    * @example `quene_name`
    */ "MnsQueueName"?: string;
    /**
    * 应用ID，不传时为系统默认应用的ID，即**app-1000000**。
    * @example `app-1000000`
    */ "AppId"?: string;
}
export { SetMessageCallbackRequest };