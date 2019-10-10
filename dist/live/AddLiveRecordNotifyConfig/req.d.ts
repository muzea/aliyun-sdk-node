interface AddLiveRecordNotifyConfigRequest {
    "RegionId"?: string;
    /**
    * 录制回调（包括录制事件和状态回调） url 地址。
    * - 必须以`http://`或者`https://`开头。
    * @example `http://www.yourdomain.cn/examplecallback.action`
    */ "NotifyUrl": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 是否需要录制任务状态回调，可取值：**true | false**。
    * 默认值：false。
    * @example `false`
    */ "NeedStatusNotify"?: boolean;
    /**
    * 按需录制回调 url 地址。
    * - 必须以`http://`或者`https://`开头。
    * - 更多详情参考[按需录制回调文档](~~85910~~)。
    * @example `http://www.yourdomain.cn/ondemandcallback.action`
    */ "OnDemandUrl"?: string;
}
export { AddLiveRecordNotifyConfigRequest };