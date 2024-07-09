import { AddTagsToCardRequest } from "./AddTagsToCard/req";
import { AddTagsToCardResponse } from "./AddTagsToCard/res";
import { GetCardDetailRequest } from "./GetCardDetail/req";
import { GetCardDetailResponse } from "./GetCardDetail/res";
import { GetCardFlowInfoRequest } from "./GetCardFlowInfo/req";
import { GetCardFlowInfoResponse } from "./GetCardFlowInfo/res";
import { GetSimCardStateDistributionRequest } from "./GetSimCardStateDistribution/req";
import { GetSimCardStateDistributionResponse } from "./GetSimCardStateDistribution/res";
import { RebindResumeSingleCardRequest } from "./RebindResumeSingleCard/req";
import { RebindResumeSingleCardResponse } from "./RebindResumeSingleCard/res";
import { ResumeSingleCardRequest } from "./ResumeSingleCard/req";
import { ResumeSingleCardResponse } from "./ResumeSingleCard/res";
import { StopSingleCardRequest } from "./StopSingleCard/req";
import { StopSingleCardResponse } from "./StopSingleCard/res";
import { ListCardInfoRequest } from "./ListCardInfo/req";
import { ListCardInfoResponse } from "./ListCardInfo/res";
import { SetCardStopRuleRequest } from "./SetCardStopRule/req";
import { SetCardStopRuleResponse } from "./SetCardStopRule/res";
import { AddDirectionalCardRequest } from "./AddDirectionalCard/req";
import { AddDirectionalCardResponse } from "./AddDirectionalCard/res";
import { AddDirectionalAddressRequest } from "./AddDirectionalAddress/req";
import { AddDirectionalAddressResponse } from "./AddDirectionalAddress/res";
import { AddDirectionalGroupRequest } from "./AddDirectionalGroup/req";
import { AddDirectionalGroupResponse } from "./AddDirectionalGroup/res";
import { DeleteDirectionalAddressRequest } from "./DeleteDirectionalAddress/req";
import { DeleteDirectionalAddressResponse } from "./DeleteDirectionalAddress/res";
import { DeleteDirectionalGroupRequest } from "./DeleteDirectionalGroup/req";
import { DeleteDirectionalGroupResponse } from "./DeleteDirectionalGroup/res";
import { ForceActivationRequest } from "./ForceActivation/req";
import { ForceActivationResponse } from "./ForceActivation/res";
import { GetCredentialPoolStatisticsRequest } from "./GetCredentialPoolStatistics/req";
import { GetCredentialPoolStatisticsResponse } from "./GetCredentialPoolStatistics/res";
import { ListDirectionalAddressRequest } from "./ListDirectionalAddress/req";
import { ListDirectionalAddressResponse } from "./ListDirectionalAddress/res";
import { ListOrderRequest } from "./ListOrder/req";
import { ListOrderResponse } from "./ListOrder/res";
import { GetCardStatusStatisticsRequest } from "./GetCardStatusStatistics/req";
import { GetCardStatusStatisticsResponse } from "./GetCardStatusStatistics/res";
import { UpdateAutoRechargeSwitchRequest } from "./UpdateAutoRechargeSwitch/req";
import { UpdateAutoRechargeSwitchResponse } from "./UpdateAutoRechargeSwitch/res";
import { RenewRequest } from "./Renew/req";
import { RenewResponse } from "./Renew/res";
import { GetCardRealStatusRequest } from "./GetCardRealStatus/req";
import { GetCardRealStatusResponse } from "./GetCardRealStatus/res";
import { ListDirectionalDetailRequest } from "./ListDirectionalDetail/req";
import { ListDirectionalDetailResponse } from "./ListDirectionalDetail/res";
import { VerifyIotCardRequest } from "./VerifyIotCard/req";
import { VerifyIotCardResponse } from "./VerifyIotCard/res";
import { BatchAddDirectionalAddressRequest } from "./BatchAddDirectionalAddress/req";
import { BatchAddDirectionalAddressResponse } from "./BatchAddDirectionalAddress/res";
import { GetCardLatestFlowRequest } from "./GetCardLatestFlow/req";
import { GetCardLatestFlowResponse } from "./GetCardLatestFlow/res";
import { AddCardToDirectionalGroupRequest } from "./AddCardToDirectionalGroup/req";
import { AddCardToDirectionalGroupResponse } from "./AddCardToDirectionalGroup/res";
import { GetRealNameStatusRequest } from "./GetRealNameStatus/req";
import { GetRealNameStatusResponse } from "./GetRealNameStatus/res";
import { SendMessageRequest } from "./SendMessage/req";
import { SendMessageResponse } from "./SendMessage/res";

interface LINKCARD {
    /**
     * 物联网卡添加标签
     */
    AddTagsToCard(query: AddTagsToCardRequest): Promise<AddTagsToCardResponse>;
    /**
     * 查询卡的详情信息。
     */
    GetCardDetail(query: GetCardDetailRequest): Promise<GetCardDetailResponse>;
    /**
     * 查询卡的流量信息。
     */
    GetCardFlowInfo(query: GetCardFlowInfoRequest): Promise<GetCardFlowInfoResponse>;
    /**
     * 获取卡状态分布
     */
    GetSimCardStateDistribution(query: GetSimCardStateDistributionRequest): Promise<GetSimCardStateDistributionResponse>;
    /**
     * 将状态为“换绑停用”的单卡操作为“换绑复用”。
     */
    RebindResumeSingleCard(query: RebindResumeSingleCardRequest): Promise<RebindResumeSingleCardResponse>;
    /**
     * 将状态为“主动停用”、“大量停用”的单卡操作为“复用”。
     */
    ResumeSingleCard(query: ResumeSingleCardRequest): Promise<ResumeSingleCardResponse>;
    /**
     * 将状态为“使用中”的单卡进行自主停用。
     */
    StopSingleCard(query: StopSingleCardRequest): Promise<StopSingleCardResponse>;
    /**
     * 查询卡列表。
     */
    ListCardInfo(query: ListCardInfoRequest): Promise<ListCardInfoResponse>;
    /**
     * 设置卡的达量停用规则，仅支持同档位池套餐和统付池套餐。
     */
    SetCardStopRule(query: SetCardStopRuleRequest): Promise<SetCardStopRuleResponse>;
    /**
     * 给定向分组中导入定向卡。
     */
    AddDirectionalCard(query: AddDirectionalCardRequest): Promise<AddDirectionalCardResponse>;
    /**
     * 定向分组新增目标地址。
     */
    AddDirectionalAddress(query: AddDirectionalAddressRequest): Promise<AddDirectionalAddressResponse>;
    /**
     * 创建定向分组。
     */
    AddDirectionalGroup(query: AddDirectionalGroupRequest): Promise<AddDirectionalGroupResponse>;
    /**
     * 定向分组删除目标地址。
     */
    DeleteDirectionalAddress(query: DeleteDirectionalAddressRequest): Promise<DeleteDirectionalAddressResponse>;
    /**
     * 删除定向分组。
     */
    DeleteDirectionalGroup(query: DeleteDirectionalGroupRequest): Promise<DeleteDirectionalGroupResponse>;
    /**
     * 同档位套餐的卡强制激活，实现共享流量扩池。
     */
    ForceActivation(query: ForceActivationRequest): Promise<ForceActivationResponse>;
    /**
     * 查询套餐凭证对应的池信息。
     */
    GetCredentialPoolStatistics(query: GetCredentialPoolStatisticsRequest): Promise<GetCredentialPoolStatisticsResponse>;
    /**
     * 查询定向分组的访问地址列表。
     */
    ListDirectionalAddress(query: ListDirectionalAddressRequest): Promise<ListDirectionalAddressResponse>;
    /**
     * 查询订单列表。
     */
    ListOrder(query: ListOrderRequest): Promise<ListOrderResponse>;
    /**
     * 概览页风险告警
     */
    GetCardStatusStatistics(query: GetCardStatusStatisticsRequest): Promise<GetCardStatusStatisticsResponse>;
    /**
     * 该接口用于开启或关闭卡的自动续费功能，仅适用于单卡套餐和同档位池套餐。
     */
    UpdateAutoRechargeSwitch(query: UpdateAutoRechargeSwitchRequest): Promise<UpdateAutoRechargeSwitchResponse>;
    /**
     * 卡的套餐续订和叠加包订购，仅适用于单卡套餐和同档位池套餐（统付池套餐请通过控制台进行扩池和购功能费）。
     */
    Renew(query: RenewRequest): Promise<RenewResponse>;
    /**
     * 智能诊断-查询卡在运营商侧状态
     */
    GetCardRealStatus(query: GetCardRealStatusRequest): Promise<GetCardRealStatusResponse>;
    /**
     * 查询物联网卡所在的定向分组及访问地址列表。
     */
    ListDirectionalDetail(query: ListDirectionalDetailRequest): Promise<ListDirectionalDetailResponse>;
    /**
     * 查询物联网卡是否为定向卡。
     */
    VerifyIotCard(query: VerifyIotCardRequest): Promise<VerifyIotCardResponse>;
    /**
     * 给定向分组添加访问地址。
     */
    BatchAddDirectionalAddress(query: BatchAddDirectionalAddressRequest): Promise<BatchAddDirectionalAddressResponse>;
    /**
     * 该接口用于查询物联网卡的实时周期用量。
     */
    GetCardLatestFlow(query: GetCardLatestFlowRequest): Promise<GetCardLatestFlowResponse>;
    /**
     * 定向分组添加卡片。
     */
    AddCardToDirectionalGroup(query: AddCardToDirectionalGroupRequest): Promise<AddCardToDirectionalGroupResponse>;
    /**
     * 该接口用于查询物联网卡的个人实名状态。
     */
    GetRealNameStatus(query: GetRealNameStatusRequest): Promise<GetRealNameStatusResponse>;
    /**
     * 平台短信下发。
     */
    SendMessage(query: SendMessageRequest): Promise<SendMessageResponse>;
}
export default LINKCARD;
