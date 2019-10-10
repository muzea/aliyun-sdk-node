interface StartMPUTaskRequest {
    "RegionId"?: string;
    /**
    * 应用ID，创建应用后生成。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 频道ID。
    * @example `yourChannelId`
    */ "ChannelId": string;
    /**
    * 任务ID，此ID为旁路直播的标识，需保证唯一。
    * 字符只允许**A-Za-z0-9_-**，长度限制**64**字节。
    * @example `yourTaskId`
    */ "TaskId": string;
    /**
    * 编码选项，具体请参见本文中的MediaEncode枚举值。
    * @example `2`
    */ "MediaEncode": number;
    "LayoutIds": number[];
    /**
    * 直播推流地址，生成规则请参见[推流地址与播流地址（原画）](~~87396~~)。
    * 对已开防盗链鉴权的域名，需要在推流地址中包含鉴权串。
    * @example `yourStreamURL`
    */ "StreamURL": string;
    "OwnerId"?: number;
    /**
    * 任务计费配置，根据您的不同设置，进行收费。TaskProfile设置：
    * - **4IN_720P**。
    * - **2IN_720P**。
    * - **1IN_720P**。
    * - **4IN_360P**。
    * - **2IN_360P**。
    * - **1IN_360P**。
    * - **Mixed_Audio**。
    * - **1IN_Audio**。
    * @example `4IN_720P`
    */ "TaskProfile"?: string;
    /**
    * 视频的裁剪方式，默认值为**2**。
    * - **0**：不保持比例铺满。
    * - **1**：保持比例裁剪。
    * - **2**：保持比例留边。
    * @example `0`
    */ "CropMode"?: number;
    /**
    * 背景色RGB，默认是**0**（黑色）。
    * @example `0`
    */ "BackgroundColor"?: number;
    "UserPanes"?: string[];
}
export { StartMPUTaskRequest };