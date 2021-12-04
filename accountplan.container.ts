Component({
  selector: 'account-plan',
  templateUrl: 'account-plan.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPlanContainer extends BaseContainer<AccountPlan, AccountPlanInquiry> implements OnInit, OnDestroy {

  constructor(public service: AccountPlanStoreService) {
    super(service);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.service.executeSearch();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
