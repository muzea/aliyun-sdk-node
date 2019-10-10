interface PutContactRequest {
    "RegionId"?: string;
    /**
    * 报警联系人姓名。
    * @example `报警联系人名`
    */ "ContactName": string;
    /**
    * 描述详情。
    * @example `报警描述`
    */ "Describe": string;
    /**
    * 手机号码、短信或者电话联系方式。添加或者修改的手机号码会收到一个激活链接， 激活之后才会被加到联系人中。
    * 手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
    * @example `1333333****`
    */ "Channels.SMS"?: string;
    /**
    * Email地址。添加或者修改Email会收到一个激活链接， 激活之后对应的Email才会被加到联系人中。
    * 手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
    * @example `test@aliyun.com`
    */ "Channels.Mail"?: string;
    /**
    * 旺旺联系方式。手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
    * @example `旺旺`
    */ "Channels.AliIM"?: string;
    /**
    * 钉钉机器人Webhook。手机号码、邮箱、钉钉机器人、旺旺必须最少添加一种联系方式。
    * @example `https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****`
    */ "Channels.DingWebHook"?: string;
}
export { PutContactRequest };