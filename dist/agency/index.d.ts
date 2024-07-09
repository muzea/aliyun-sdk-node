import { SubscriptionBillRequest } from "./SubscriptionBill/req";
import { SubscriptionBillResponse } from "./SubscriptionBill/res";
import { CancelSubscriptionBillRequest } from "./CancelSubscriptionBill/req";
import { CancelSubscriptionBillResponse } from "./CancelSubscriptionBill/res";
import { EditNewBuyStatusRequest } from "./EditNewBuyStatus/req";
import { EditNewBuyStatusResponse } from "./EditNewBuyStatus/res";
import { EditEndUserStatusRequest } from "./EditEndUserStatus/req";
import { EditEndUserStatusResponse } from "./EditEndUserStatus/res";
import { EditZeroCreditShutdownRequest } from "./EditZeroCreditShutdown/req";
import { EditZeroCreditShutdownResponse } from "./EditZeroCreditShutdown/res";
import { InviteSubAccountRequest } from "./InviteSubAccount/req";
import { InviteSubAccountResponse } from "./InviteSubAccount/res";
import { GetCreditInfoRequest } from "./GetCreditInfo/req";
import { GetCreditInfoResponse } from "./GetCreditInfo/res";
import { SetWarningThresholdRequest } from "./SetWarningThreshold/req";
import { SetWarningThresholdResponse } from "./SetWarningThreshold/res";
import { DeductOutstandingBalanceRequest } from "./DeductOutstandingBalance/req";
import { DeductOutstandingBalanceResponse } from "./DeductOutstandingBalance/res";
import { SetCreditLineRequest } from "./SetCreditLine/req";
import { SetCreditLineResponse } from "./SetCreditLine/res";
import { ListCountriesRequest } from "./ListCountries/req";
import { ListCountriesResponse } from "./ListCountries/res";
import { GetMonthlyBillRequest } from "./GetMonthlyBill/req";
import { GetMonthlyBillResponse } from "./GetMonthlyBill/res";
import { GetDailyBillRequest } from "./GetDailyBill/req";
import { GetDailyBillResponse } from "./GetDailyBill/res";
import { GetInviteStatusRequest } from "./GetInviteStatus/req";
import { GetInviteStatusResponse } from "./GetInviteStatus/res";
import { GetAccountInfoRequest } from "./GetAccountInfo/req";
import { GetAccountInfoResponse } from "./GetAccountInfo/res";
import { GetUnassociatedCustomerRequest } from "./GetUnassociatedCustomer/req";
import { GetUnassociatedCustomerResponse } from "./GetUnassociatedCustomer/res";
import { ResendEmailRequest } from "./ResendEmail/req";
import { ResendEmailResponse } from "./ResendEmail/res";
import { CreateCustomerRequest } from "./CreateCustomer/req";
import { CreateCustomerResponse } from "./CreateCustomer/res";
import { SetAccountInfoRequest } from "./SetAccountInfo/req";
import { SetAccountInfoResponse } from "./SetAccountInfo/res";
import { QuotaListExportPagedRequest } from "./QuotaListExportPaged/req";
import { QuotaListExportPagedResponse } from "./QuotaListExportPaged/res";
import { CustomerQuotaRecordListRequest } from "./CustomerQuotaRecordList/req";
import { CustomerQuotaRecordListResponse } from "./CustomerQuotaRecordList/res";
import { ExportCustomerQuotaRecordRequest } from "./ExportCustomerQuotaRecord/req";
import { ExportCustomerQuotaRecordResponse } from "./ExportCustomerQuotaRecord/res";
import { ListCouponUsageRequest } from "./ListCouponUsage/req";
import { ListCouponUsageResponse } from "./ListCouponUsage/res";

interface AGENCY {
    /**
     * 阿里云生态伙伴多级账单订阅oss生成
     */
    SubscriptionBill(query: SubscriptionBillRequest): Promise<SubscriptionBillResponse>;
    /**
     * 国际渠道生态伙伴多级账单取消订阅功能
     */
    CancelSubscriptionBill(query: CancelSubscriptionBillRequest): Promise<CancelSubscriptionBillResponse>;
    /**
     * 阿里云代销模式的伙伴设置下级分销客户的新购状态
     */
    EditNewBuyStatus(query: EditNewBuyStatusRequest): Promise<EditNewBuyStatusResponse>;
    /**
     * 阿里云国际渠道总经销商伙伴以及阿里云国际渠道经销商伙伴管理代销下级客户后付费实例的停机状态。
     */
    EditEndUserStatus(query: EditEndUserStatusRequest): Promise<EditEndUserStatusResponse>;
    /**
     * 阿里云总经销商伙伴和经销商伙伴修改下级客户的停机策略
     */
    EditZeroCreditShutdown(query: EditZeroCreditShutdownRequest): Promise<EditZeroCreditShutdownResponse>;
    /**
     * 邀请注册成为伙伴客户
     */
    InviteSubAccount(query: InviteSubAccountRequest): Promise<InviteSubAccountResponse>;
    /**
     * 查询分销客户信控信息。如果分销客户是Agency类型的，那么返回参数中的PopCreditInfoJson为空。此功能仅供针对Reseller和Distributor。
     */
    GetCreditInfo(query: GetCreditInfoRequest): Promise<GetCreditInfoResponse>;
    /**
     * 通过此API设置信控使用阈值。
     * 当客户信控到达阈值以下，会通过邮件通知分销商。
     * 此功能仅供针对Reseller和Distributor。
     */
    SetWarningThreshold(query: SetWarningThresholdRequest): Promise<SetWarningThresholdResponse>;
    /**
     * 此API用来冲减分销客户已被抵扣的额度。例如当前已抵扣额度为500，可用额度是1000。通过冲减，冲减了300， 之后已抵扣额度就变为200，可用额度变为1300。
     * 注意，有时候会发现客户的已用额度为负数。此时说明无需对客户已用额度进行恢复，静待客户使用即可。造成这种现象的原因在于，当客户额度满的时候产生了退款。所以，客户额度会额外增加。
     * 例如，当前客户最大可用额度是1000，无任何使用。此时发生退款300。则已用额度，会变为-300。
     */
    DeductOutstandingBalance(query: DeductOutstandingBalanceRequest): Promise<DeductOutstandingBalanceResponse>;
    /**
     * 设置分销客户信控额度。此功能仅供针对Reseller和Distributor。
     */
    SetCreditLine(query: SetCreditLineRequest): Promise<SetCreditLineResponse>;
    /**
     * 此功能对所有分销商开放。根据分销商合同内约定的可作业国家信息展示对应区域代码信息
     */
    ListCountries(query: ListCountriesRequest): Promise<ListCountriesResponse>;
    /**
     * 返回分销商月账单。
     * 此功能仅供针对Reseller和Distributor。
     */
    GetMonthlyBill(query: GetMonthlyBillRequest): Promise<GetMonthlyBillResponse>;
    /**
     * 获取分销商日账单。
     * 此功能仅供针对Reseller和Distributor。
     */
    GetDailyBill(query: GetDailyBillRequest): Promise<GetDailyBillResponse>;
    /**
     * 查询已报备已发出邀请客户的邀请状态
     */
    GetInviteStatus(query: GetInviteStatusRequest): Promise<GetInviteStatusResponse>;
    /**
     * 返回分销客户账号信息。
     */
    GetAccountInfo(query: GetAccountInfoRequest): Promise<GetAccountInfoResponse>;
    /**
     * 获取所有未关联的客户。
     */
    GetUnassociatedCustomer(query: GetUnassociatedCustomerRequest): Promise<GetUnassociatedCustomerResponse>;
    /**
     * 重新发送邀请邮件。
     */
    ResendEmail(query: ResendEmailRequest): Promise<ResendEmailResponse>;
    /**
     * 此功能用来报备一个待邀请的客户
     */
    CreateCustomer(query: CreateCustomerRequest): Promise<CreateCustomerResponse>;
    /**
     * 用来更新子账户信息，包括昵称和注释。
     */
    SetAccountInfo(query: SetAccountInfoRequest): Promise<SetAccountInfoResponse>;
    /**
     * 国际分销用户查看quota流水导出结果，只允许国际站调用。
     */
    QuotaListExportPaged(query: QuotaListExportPagedRequest): Promise<QuotaListExportPagedResponse>;
    /**
     * 查询国际站分销客户quota调整流水，只针对国际用户。国内站无法调用
     */
    CustomerQuotaRecordList(query: CustomerQuotaRecordListRequest): Promise<CustomerQuotaRecordListResponse>;
    /**
     * 国际站分销客户，导出quota调整额度流水到Excel，只允许国际站调用
     */
    ExportCustomerQuotaRecord(query: ExportCustomerQuotaRecordRequest): Promise<ExportCustomerQuotaRecordResponse>;
    /**
     * 分销伙伴查询自己优惠券发放后的优惠券使用量。
     */
    ListCouponUsage(query: ListCouponUsageRequest): Promise<ListCouponUsageResponse>;
}
export default AGENCY;
