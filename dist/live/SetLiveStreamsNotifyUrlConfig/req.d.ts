interface SetLiveStreamsNotifyUrlConfigRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 设置直播流信息推送到的URL地址。
    * >必须以`http://`开头。
    * @example `rtmp://play.aliyunlive.com/notify`
    */ "NotifyUrl": string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "AuthType"?: string;
    "AuthKey"?: string;
}
export { SetLiveStreamsNotifyUrlConfigRequest };