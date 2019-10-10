interface ModifyActionEventPolicyRequest {
    /**
    * 需要开启或关闭历史事件功能的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 是否开启历史事件记录功能。取值：**True | False**
    * @example `True`
    */ "EnableEventLog": string;
    "OwnerId"?: number;
}
export { ModifyActionEventPolicyRequest };