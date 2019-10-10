interface UpdateLiveRecordNotifyConfigRequest {
    "RegionId"?: string;
    /**
    * 加速域名。
    * @example `test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 录制回调（包括事件回调和状态回调）url地址。
    * - 必须以`http://`或`https:/`/开头。
    * - 需要做url encode。
    * @example `http://www.yourdomain.cn/examplecallback.action`
    */ "NotifyUrl"?: string;
    /**
    * 按需回调url地址。
    * - 必须以`http://`或`https://`开头。
    * - 需要做url encode。
    * @example `http://www.yourdomain.cn/ondemandcallback.action`
    */ "OnDemandUrl"?: string;
    /**
    * 是否需要录制任务状态回调，可取值：**true | false**。
    * 默认值：**false**。
    * @example `false`
    */ "NeedStatusNotify"?: boolean;
}
export { UpdateLiveRecordNotifyConfigRequest };