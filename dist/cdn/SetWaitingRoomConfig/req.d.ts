interface SetWaitingRoomConfigRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 开启WaitingRoom功能的URI正则字符串。
    * @example `xxx`
    */ "WaitUri": string;
    /**
    * 允许回源比例，取值范围：**0**-**100**。
    * @example `30`
    */ "AllowPct": number;
    /**
    * 进入排队后，排队时长，单位：秒。
    * @example `30`
    */ "MaxTimeWait": number;
    /**
    * 离开排队后，跳过排队时长，单位：秒。
    * @example `20`
    */ "GapTime": number;
    /**
    * 排队等待页面URL。
    * @example `WaitUrl`
    */ "WaitUrl": string;
    "OwnerId"?: number;
}
export { SetWaitingRoomConfigRequest };