function drawlines(map, lightRailColor, BusLineColor){
  var decodedLightRail1Path = google.maps.geometry.encoding.decodePath('kheqFnko_SqGnFeBxDeAhGcAlG_AjLS~DA`EGpF@bMXlJ\rDV`CDt@FxAH`GIdCg@tFeAtI}BlJwAlFgFjMwF|NeEdL_FnLyEzHoJnJ}EfG{ElH_J~JiEdF{EpFcE`F]fBElA^pAr@pFo@rBaDt@cJ`AiHh@uEfA_C~@oGzCcBnAeDzCgCjBoDpB{DdBcEpBmFlBmIpDeDjB}DtBaHtCaJ`FgJhFmGdDgJhGwBz@gDdAmKhBqJjCkIzBsHhBoFDsGB}CAyLj@eEfBkAu@CkCH_G@oPYyEaAiCgBoBs@kCe@uA}IeM_HcKiFeIuHqKyDgFvE}HXgAw@iAyD{FoBgCuDaFsJoNkG_JuGoJuFwH}FaIwEcGiFC');

  var decodedLightRail1Levels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

  var lightRail1 = new google.maps.Polyline({
   path: decodedLightRail1Path,
   levels: decodedLightRail1Levels,
   strokeColor: lightRailColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedLightRail2Path = google.maps.geometry.encoding.decodePath('iqdqF`my_SwE_AaMaCgKeCoPcCgSkD{LuBuP]uGd@oGx@oF|@_J^sM`@oHr@yI|BsDnA_FlCwJbIoGjDkH~CyKbFoLlFmRbJoN~HoO~IwJfEoGnAqLrCwJnCgPjB}FMoM?kInDqBdO{DlEwD`BsChBm@`Ei@|FyCdAiDPsBc@qBkAcCqCmByD{FiQqBoEeBwAwEwDkCmC{A}BmCaCsD{BwCiB{CgB');

  var decodedLightRail2Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var lightRail2 = new google.maps.Polyline({
   path: decodedLightRail2Path,
   levels: decodedLightRail2Levels,
   strokeColor: lightRailColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });


  var decodedLightRail3Path = google.maps.geometry.encoding.decodePath('}`pqFzsj`SCuQBcf@Go[CoF@cWL_T|@cDbBwClBgEJsDVsZBuHj@yIb@eIKiHGe[DuR[gCuAiDmAqECeOI}Jq@{K}DeR_FuNGcEI_OBmHrA_Gd@cGI}JQkFo@yBeAo@oBYsAUgG_@uBz@aF|B}CzBc@v@W~AO|FSz@qAh@mCJkEk@eDwBwBaCgBiEgBmFwBeHsBqDiIqG{FmHsFsDcLmH');

  var decodedLightRail3Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var lightRail3 = new google.maps.Polyline({
   path: decodedLightRail3Path,
   levels: decodedLightRail3Levels,
   strokeColor: lightRailColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedLightRail4Path = google.maps.geometry.encoding.decodePath('elsqFx{z_SmDeFyEuIaBgCwBiCqFuHsEa@iBd@mGfBiG`CqGrBsDf@wFn@wKb@iG?qCIwEQkGOyH?{GHsFDaG@yJ@{`@N{j@b@k_@I_LvEmOzKyL~QmGdPuHvQw^|WySfM');

  var decodedLightRail4Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var lightRail4 = new google.maps.Polyline({
   path: decodedLightRail4Path,
   levels: decodedLightRail4Levels,
   strokeColor: lightRailColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedLightRail5Path = google.maps.geometry.encoding.decodePath('cjsqFb~z_SkEmGkD{GcJiMiFyHsBwHeFcMyBwDaDeGqJsO{CqEwJiNcE}JiEaLgDkIaJaNaFgHgDsEu@}BYcDG{HDgN?gU\eK@oDQuIeEoBwEwB}AaGKqGY_Na@oK}@_^NmM_@sOe@cXl@qPrBkY`G}v@jEol@hHc~@');

  var decodedLightRail5Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var lightRail5 = new google.maps.Polyline({
   path: decodedLightRail5Path,
   levels: decodedLightRail5Levels,
   strokeColor: lightRailColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus1Path = google.maps.geometry.encoding.decodePath('u|mqFtfe`SKgs@^i~@B_v@z@oi@]ah@q@cd@Nm_@M{GEoOJ_ZDwZAyN{EGkMGkHCeJ@kF?yS?aNHcNKe[G}IA{DnF_NJ{QEqWL{J`AaKlAcEo@eCcBuGiJkM}QkNoRsAyB}DyFkLwOeJmMmK{NoEkHqBqC');

  var decodedBus1Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus1 = new google.maps.Polyline({
   path: decodedBus1Path,
   levels: decodedBus1Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus2Path = google.maps.geometry.encoding.decodePath('m{mqFjvj`SIizAUknAHew@RulACmy@^el@OiYi@mYNoUI_QAoFEgVF}TDq`@rTPdKGhKAba@Dv_@Jn`@?lOOvk@Mb_Ab@xl@NdUGl`@M');

  var decodedBus2Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus2 = new google.maps.Polyline({
   path: decodedBus2Path,
   levels: decodedBus2Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus3Path = google.maps.geometry.encoding.decodePath('_k{qFllx_S|]pFvs@Nfh@`@|Q|DdLdI`G~BdEjDD|HxSQxROdEiCxByArBmAvC]pAKfFiEbJfM`E`GjAyA|FaIzG}JpJwMxGaJdL?dSCjS@rPDpPGxM@vRAhIFdRLtOAtSE~`@LtQNhNKhUE');

  var decodedBus3Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus3 = new google.maps.Polyline({
   path: decodedBus3Path,
   levels: decodedBus3Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus4Path = google.maps.geometry.encoding.decodePath('g|mqFdcx_Stl@Dr`@FxUN`JGpJGhJMlFLpAxAv@fAl@n@~F?bKCdK@ShOAni@Dp|@I`w@Dbz@`zABhv@?jr@X');

  var decodedBus4Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBB');

  var bus4 = new google.maps.Polyline({
   path: decodedBus4Path,
   levels: decodedBus4Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus5Path = google.maps.geometry.encoding.decodePath('chyqFfv_`Snl@?dg@Jz[Kj`@J|g@Q`e@Hnk@UtTXpKMhb@L|S{@dINnRLhPQdJGfa@Jfa@H``@Bja@C~`@?x`@Bz`@Gft@Nd{@G');

  var decodedBus5Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus5 = new google.maps.Polyline({
   path: decodedBus5Path,
   levels: decodedBus5Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus6Path = google.maps.geometry.encoding.decodePath('mzwqFf`g`S?ey@Byx@u@cBX}RE{j@Viy@C}b@H_k@rUBbNEtF@~M@n]E`MI|GoJbEhFvQqW~O_UnGiJhGqIvSiZ|SiZnIgLAvAX|@t@bATjACpGCtFB|LCtRMzKFvNK`MSnHCdNIlNMjOMpNCzSHbSRtLRzOMp}C');

  var decodedBus6Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus6 = new google.maps.Polyline({
   path: decodedBus6Path,
   levels: decodedBus6Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus7Path = google.maps.geometry.encoding.decodePath('imvqFvee`SA}x@WuTK{T?wMPsMRy[Ly\Ock@F_f@?mh@@cd@f@gHv@iA~Ae@nFIdGHjICpQQvDe@dE_DfBsBjFw@vFyCpH{KlLqP');

  var decodedBus7Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus7 = new google.maps.Polyline({
   path: decodedBus7Path,
   levels: decodedBus7Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus8Path = google.maps.geometry.encoding.decodePath('klvqFlw_`SQuf@Bsy@C_p@Zye@r@iAtAi@tCBrFH|MKdK?rFMzG}Cv@oArCqB~GaAxHcJlP{U');

  var decodedBus8Levels = decodeLevels('BBBBBBBBBBBBBBBBBB');

  var bus8 = new google.maps.Polyline({
   path: decodedBus8Path,
   levels: decodedBus8Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus9Path = google.maps.geometry.encoding.decodePath('}_uqFvee`SC}N?yYAqVCqS@}MCwMAmM@wSuBgGhAsAn@_CXgGCgI?mRCiR?oQCiStLCn@g@hA_BvDlF`EwFpDgFvChEvAZtBm@z@a@`@Dr@`@~G|RnDnK~@bF~L|DbJxB|Ga@pFqC`E}DnImI_EuHeEyJwDkFcD{EgD_GwE_MgB}E_AkDg@yGaEeI');

  var decodedBus9Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus9 = new google.maps.Polyline({
   path: decodedBus9Path,
   levels: decodedBus9Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus10Path = google.maps.geometry.encoding.decodePath('wrsqF`fe`S@y^EkYAsTDyc@?}j@BkNBam@?eI[{@sACwI@eGD@gY?lZOtd@CpR@zy@lJAhJ?');

  var decodedBus10Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBB');

  var bus10 = new google.maps.Polyline({
   path: decodedBus10Path,
   levels: decodedBus10Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus11Path = google.maps.geometry.encoding.decodePath('aoqqF|ee`SFw[Bkc@Asc@DqWAiR?wRA}H');

  var decodedBus11Levels = decodeLevels('BBBBBBBB');

  var bus11 = new google.maps.Polyline({
   path: decodedBus11Path,
   levels: decodedBus11Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus12Path = google.maps.geometry.encoding.decodePath('swpqFvs``S|IJJjMbVQba@?BlA~XMnj@HKv~Bl@`Ath@');

  var decodedBus12Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus12 = new google.maps.Polyline({
   path: decodedBus12Path,
   levels: decodedBus12Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus13Path = google.maps.geometry.encoding.decodePath("ibkqFvee`SRg`CBi~@EefAFqk@Agi@?{\\@a]Aw\\Jsc@A_[?kqA~yAB?ay@Eo{@");

  var decodedBus13Levels = decodeLevels('BBBBBBBBBBBBBBB');

  var bus13 = new google.maps.Polyline({
   path: decodedBus13Path,
   levels: decodedBus13Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus14Path = google.maps.geometry.encoding.decodePath("e~hqFnee`S?k^Gsw@R}x@uUPS}[`@yAOmsBCg\\kUK?cMvbAG");

  var decodedBus14Levels = decodeLevels('BBBBBBBBBBBB');

  var bus14 = new google.maps.Polyline({
   path: decodedBus14Path,
   levels: decodedBus14Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus15Path = google.maps.geometry.encoding.decodePath("}ghqF|ee`SqU}^ebAm_B");

  var decodedBus15Levels = decodeLevels('BBB');

  var bus15 = new google.maps.Polyline({
   path: decodedBus15Path,
   levels: decodedBus15Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus16Path = google.maps.geometry.encoding.decodePath("}ppqFls``SBkHbDqGjAuC?_HqAsQ~OIxOC|UHHuJ|IC@{Ehl@S@ah@ViAxEeDdCQzCd@lPG?ct@Vq@vTqH");

  var decodedBus16Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBB');

  var bus16 = new google.maps.Polyline({
   path: decodedBus16Path,
   levels: decodedBus16Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus17Path = google.maps.geometry.encoding.decodePath("wzoqFda_`SH`TnOBLxj@M`l@Yry@?j\\");

  var decodedBus17Levels = decodeLevels('BBBBBBB');

  var bus17 = new google.maps.Polyline({
   path: decodedBus17Path,
   levels: decodedBus17Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus18Path = google.maps.geometry.encoding.decodePath("csnqFr`_`S@qbAHgD|CeKHkBtGkD|E}CzBw@lZQGmj@?yLbZE@_Y`JEBj@nh@DxBuA?iKsUB");

  var decodedBus18Levels = decodeLevels('BBBBBBBBBBBBBBBBBBB');

  var bus18 = new google.maps.Polyline({
   path: decodedBus18Path,
   levels: decodedBus18Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus19Path = google.maps.geometry.encoding.decodePath("wlvqFhs{_StFSnX?jHItAvBCdCfAjA~AoCvMo]jK}Ntl@my@ah@ws@{[qd@Ayo@Dir@kAmCcCoDMeKH_ZPqT?kKl@iGa@}L");

  var decodedBus19Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBB');

  var bus19 = new google.maps.Polyline({
   path: decodedBus19Path,
   levels: decodedBus19Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus20Path = google.maps.geometry.encoding.decodePath("uixqFtvx_S`]`@vJnBfLdFzI`NvJl[pDtIrKdI|I~EzABdCcA`CcBnIuNfJaM`BnFxAxAfA|A`@fB^nBdIfLdAz@dALpAQ`A?jAv@");

  var decodedBus20Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus20 = new google.maps.Polyline({
   path: decodedBus20Path,
   levels: decodedBus20Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus21Path = google.maps.geometry.encoding.decodePath("_vrqFx`{_SkJ_Nbq@_aAyCsDsBv@cMrQ{d@|o@kBpCxCvEJh@UhAmFlHs@v@aEy@o@c@Uk@Fa@fBiCdCeDScAIkAmAaCc@]uDtF_EcGzScZbEhFj\\{d@~GoJb@i@aEhFcVi]kVg]mXga@|FM?{|@HqpBHkUSoB");

  var decodedBus21Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus21 = new google.maps.Polyline({
   path: decodedBus21Path,
   levels: decodedBus21Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus22Path = google.maps.geometry.encoding.decodePath("ccsqFxdz_ShPfU`CgDi\\yd@bCoDzP`VdC{DsPgUmJ}MpGcJdg@ls@jCaDwd@yo@yWJcS}XgPmUsJeNuQcWeEgFyLa@wCs@gNoSAyN@g\\VuCEyHe@wIBcR?qeA");

  var decodedBus22Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus22 = new google.maps.Polyline({
   path: decodedBus22Path,
   levels: decodedBus22Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus23Path = google.maps.geometry.encoding.decodePath("avxqFvuv_SnOr@dLs@fGcDf[gd@tAQ|CxFfHGdUr\\|[xd@zNfSjG?mbAqvAoLF`wACr{@?z\\B@eAhRIpeAM|U?lKCbBjA`GG??bCQxMCrAv@je@Gp`BXRid@Kac@sUG?wMlw@?j]F");

  var decodedBus23Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus23 = new google.maps.Polyline({
   path: decodedBus23Path,
   levels: decodedBus23Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus24Path = google.maps.geometry.encoding.decodePath("s`qqF~xy_SdGcJsJuMjCkD~G`JCh]y@Cm@g@e@u@eP{TlQ}VxAoCHi@@eINaODid@HwmBEuA]iEGmLHaw@Dsg@f^E@|`@kIC@_a@hI@GzqA?n[PFBhd@}@`@s@x@g@t@]`AYfBCzABfARfAx@nA`Ad@`@FHrHAjF@fMFx[Gp\\Y~BD`Caq@C?m]F_`@C_u@Hs]w@gCm@mCYuENogB");

  var decodedBus24Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus24 = new google.maps.Polyline({
   path: decodedBus24Path,
   levels: decodedBus24Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus25Path = google.maps.geometry.encoding.decodePath("o_uqFjru_S@mjB\\qf@R}^z@eIaAiNuOWGjwBFxsAduAFMau@Hk^w@oOk@gLAwPGw\\Vw\\NwKbgCX\\fF?zcABlpA?v}BzNC~DwEbH_HxGwJrJuQlF_LzCoOfBwMHk^?wl@PmDNu^^uLz@uEO_HI_q@xe@NNlb@g@vDqKtLuCtAoLQuEjBeAtGBdRMlW`A~@th@\\");

  var decodedBus25Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus25 = new google.maps.Polyline({
   path: decodedBus25Path,
   levels: decodedBus25Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus26Path = google.maps.geometry.encoding.decodePath("obwqFd{r_StFfAvLBlUChVCrVBhsAHfuANvAv@l]B`BqAj@_Ala@?dHa@iBe@iBa@aBiAyA{@{[?mCd@_BfBqGJkKHgLl@aDYcBoAsa@]aCp@yIOkB~@}BNqJDcFjAi@rBB|LG|M?`}@KzmAaGJBm|@wCKsB~BkKC?{\\yFI?xFnF?B~MpK?Klh@rO?");

  var decodedBus26Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus26 = new google.maps.Polyline({
   path: decodedBus26Path,
   levels: decodedBus26Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus27Path = google.maps.geometry.encoding.decodePath("wsqqFh{u_S~\\L@iCrz@C`i@Mx^Gx@KOvBLbN@tLgLGoAiAhF}KdBaHzAkKbBIo@vE\\xAOlLHtPGjXAjNAhL@zV~IE?bYeJ?ol@BcID@zLaSBCc[~\\WNiUjAjAnZBlNBA~FtOFtDE?l@hM?bG?");

  var decodedBus27Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus27 = new google.maps.Polyline({
   path: decodedBus27Path,
   levels: decodedBus27Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus28Path = google.maps.geometry.encoding.decodePath("{upqF|xz_StDGxAgAfBaCj@c@dBKhLE~H@nRMNdI{{@GFlOpS?Bg_BEx~B`IOEbFhGBdALhIArAiAbNMb@g@jB_D??NuB?uG[{Dw@aEa@iDCqO@}HwH@CtHtXB~Ar@^hDLhA");

  var decodedBus28Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus28 = new google.maps.Polyline({
   path: decodedBus28Path,
   levels: decodedBus28Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus29Path = google.maps.geometry.encoding.decodePath("klpqFhuz_SDoo@yHH|RG@{Gvf@Dr@NtAbDfDsB~ByBd@r@~@HbL`@?zq@eI?cIECqb@AgDByABoBGgBUyBwDtCnGgFjAvB");

  var decodedBus29Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBBB');

  var bus29 = new google.maps.Polyline({
   path: decodedBus29Path,
   levels: decodedBus29Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus30Path = google.maps.geometry.encoding.decodePath("qwkqFn_q_SByUBy`@wHCIdw@A{v@gG?o@hAFlt@}RLCts@qXNcAbAg@j@BzvAI`z@@bGkTMuQAiS?@vV?yF}HB@aO");

  var decodedBus30Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBB');

  var bus30 = new google.maps.Polyline({
   path: decodedBus30Path,
   levels: decodedBus30Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus31Path = google.maps.geometry.encoding.decodePath("{pgqFfee`SC{y@Hqy@?w[Em\\");

  var decodedBus31Levels = decodeLevels('BBBBB');

  var bus31 = new google.maps.Polyline({
   path: decodedBus31Path,
   levels: decodedBus31Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });

  var decodedBus32Path = google.maps.geometry.encoding.decodePath("upxqF|c{_SxbAEJ{c@EmBgA}@yES}TC?bELXbF@hBAXK\\sEmZCHi^AgGW_Ac@a@yACiDGU[Oe@A_JeLI");

  var decodedBus32Levels = decodeLevels('BBBBBBBBBBBBBBBBBBBBBBBB');

  var bus32 = new google.maps.Polyline({
   path: decodedBus32Path,
   levels: decodedBus32Levels,
   strokeColor: BusLineColor,
   strokeOpacity: 1.0,
   strokeWeight: 2,
   map: map
  });
}
