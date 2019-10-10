interface AddTrancodeSEIRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `AppName`
    */ "AppName": string;
    /**
    * 流名称。
    * @example `StreamName`
    */ "StreamName": string;
    /**
    * SEI文本。长度限制：4000字节。
    * @example `firsttxt`
    */ "Text": string;
    /**
    * 追加到每一个关键帧/每一帧。取值：**keyframe** | **frame**。
    * @example `keyframe`
    */ "Pattern": string;
    /**
    * 重复次数，-1代表无限。
    * @example `1`
    */ "Repeat": number;
    /**
    * 接收到命令后的delay时间。单位： 毫秒。
    * @example `100`
    */ "Delay": number;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `live.aliyunlive.com`
    */ "DomainName": string;
}
export { AddTrancodeSEIRequest };