import { EnrollAccountRequest } from "./EnrollAccount/req";
import { EnrollAccountResponse } from "./EnrollAccount/res";
import { GetEnrolledAccountRequest } from "./GetEnrolledAccount/req";
import { GetEnrolledAccountResponse } from "./GetEnrolledAccount/res";
import { ListEnrolledAccountsRequest } from "./ListEnrolledAccounts/req";
import { ListEnrolledAccountsResponse } from "./ListEnrolledAccounts/res";
import { GetAccountFactoryBaselineRequest } from "./GetAccountFactoryBaseline/req";
import { GetAccountFactoryBaselineResponse } from "./GetAccountFactoryBaseline/res";
import { ListAccountFactoryBaselinesRequest } from "./ListAccountFactoryBaselines/req";
import { ListAccountFactoryBaselinesResponse } from "./ListAccountFactoryBaselines/res";

interface GOVERNANCE {
    /**
     * 通过账号工厂创建一个新的资源账号或者纳管一个已有的资源账号。
     */
    EnrollAccount(query: EnrollAccountRequest): Promise<EnrollAccountResponse>;
    /**
     * 获取账号工厂中注册账号详情。
     */
    GetEnrolledAccount(query: GetEnrolledAccountRequest): Promise<GetEnrolledAccountResponse>;
    /**
     * 获取账号工厂中注册账号的列表。
     */
    ListEnrolledAccounts(query: ListEnrolledAccountsRequest): Promise<ListEnrolledAccountsResponse>;
    /**
     * 获取账号工厂基线详情。
     */
    GetAccountFactoryBaseline(query: GetAccountFactoryBaselineRequest): Promise<GetAccountFactoryBaselineResponse>;
    /**
     * 获取账号工厂基线列表。
     */
    ListAccountFactoryBaselines(query: ListAccountFactoryBaselinesRequest): Promise<ListAccountFactoryBaselinesResponse>;
}
export default GOVERNANCE;
