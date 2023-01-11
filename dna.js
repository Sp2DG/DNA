// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna, 
    mutate() {  
      let x = (dna[0]);
      dna = mockUpStrand(); 
      while(x === dna[0]){
        dna = mockUpStrand();
      }
    },
    
    compareDNA( obj) {
      let porcentaje = 0;
      let r = 6.666;
      for(let i=0; i<dna.length;){
        for(i; i<obj.dna.length;i++){
  if(dna[i] === obj.dna[i]){
    porcentaje += r;
  }
  }
}
console.log('specimen #1 and specimen #2 have '+porcentaje.toFixed(2) + '%'
+ ' DNA in common.');
    },
    willLikelySurvive(){
      let basePerCent = 0;
      let u = 6.667;
      for(let i=0; i<primero.dna.length;i++){
  
          if(dna[i] === 'C'|| dna[i] === 'G'){
               basePerCent += u;               
               }
          }
          if(basePerCent.toFixed(2)> 59.99){
            return true;
          }
          else {
            return false;
          }
        }  
  }
}

const primero = pAequorFactory(1, mockUpStrand());
const dos = pAequorFactory(2, mockUpStrand());
//primero.willLikelySurvive();
const a = pAequorFactory(3, mockUpStrand());
const b = pAequorFactory(4, mockUpStrand());
const c = pAequorFactory(5, mockUpStrand());
const d = pAequorFactory(6, mockUpStrand());
const e = pAequorFactory(7, mockUpStrand());
const f = pAequorFactory(8, mockUpStrand());
const g = pAequorFactory(9, mockUpStrand());
const h = pAequorFactory(10, mockUpStrand());
const i = pAequorFactory(11, mockUpStrand());
const j = pAequorFactory(12, mockUpStrand());
const k = pAequorFactory(13, mockUpStrand());
const m = pAequorFactory(14, mockUpStrand());
const l = pAequorFactory(15, mockUpStrand());
const n = pAequorFactory(16, mockUpStrand());
const o = pAequorFactory(17, mockUpStrand());
const p = pAequorFactory(18, mockUpStrand());
const q = pAequorFactory(19, mockUpStrand());
const r = pAequorFactory(20, mockUpStrand());
const s = pAequorFactory(21, mockUpStrand());
const t = pAequorFactory(22, mockUpStrand());
const u = pAequorFactory(23, mockUpStrand());
const w = pAequorFactory(24, mockUpStrand());
const x = pAequorFactory(25, mockUpStrand());
const y = pAequorFactory(26, mockUpStrand());
const z = pAequorFactory(27, mockUpStrand());
const A = pAequorFactory(29, mockUpStrand());
const B = pAequorFactory(30, mockUpStrand());
const C = pAequorFactory(31, mockUpStrand());
const D = pAequorFactory(32, mockUpStrand());
const E = pAequorFactory(33, mockUpStrand());
const F = pAequorFactory(34, mockUpStrand());
//+++++++++++++++++++++++++++++++++++++++++++
const c1 = pAequorFactory(35, mockUpStrand());
const d1 = pAequorFactory(36, mockUpStrand());
const e1 = pAequorFactory(37, mockUpStrand());
const f1 = pAequorFactory(38, mockUpStrand());
const g1= pAequorFactory(39, mockUpStrand());
const h1 = pAequorFactory(40, mockUpStrand());

const i1 = pAequorFactory(41, mockUpStrand());
const j1 = pAequorFactory(42, mockUpStrand());
const k1 = pAequorFactory(43, mockUpStrand());
const m1 = pAequorFactory(44, mockUpStrand());
const l1 = pAequorFactory(45, mockUpStrand());
const n1 = pAequorFactory(46, mockUpStrand());
const o1 = pAequorFactory(47, mockUpStrand());
const p1 = pAequorFactory(48, mockUpStrand());
const q1 = pAequorFactory(49, mockUpStrand());
const r1 = pAequorFactory(50, mockUpStrand());
const s1 = pAequorFactory(51, mockUpStrand());
const t1 = pAequorFactory(52, mockUpStrand());
const u1 = pAequorFactory(53, mockUpStrand());
const w1 = pAequorFactory(54, mockUpStrand());
const x1 = pAequorFactory(55, mockUpStrand());
const y1 = pAequorFactory(56, mockUpStrand());
const z1 = pAequorFactory(57, mockUpStrand());
const A1 = pAequorFactory(59, mockUpStrand());
const B1 = pAequorFactory(60, mockUpStrand());
const C1 = pAequorFactory(61, mockUpStrand());
const D1 = pAequorFactory(62, mockUpStrand());
const E1 = pAequorFactory(63, mockUpStrand());
const F1 = pAequorFactory(64, mockUpStrand());

const a2 = pAequorFactory(88, mockUpStrand());
const b2 = pAequorFactory(89, mockUpStrand());
const c2 = pAequorFactory(65, mockUpStrand());
const d2 = pAequorFactory(66, mockUpStrand());
const e2 = pAequorFactory(67, mockUpStrand());
const f2 = pAequorFactory(68, mockUpStrand());
const g2 = pAequorFactory(69, mockUpStrand());
const h2 = pAequorFactory(70, mockUpStrand());
const i2 = pAequorFactory(71, mockUpStrand());
const j2 = pAequorFactory(72, mockUpStrand());
const k2 = pAequorFactory(73, mockUpStrand());
const m2 = pAequorFactory(74, mockUpStrand());
const l2 = pAequorFactory(75, mockUpStrand());
const n2 = pAequorFactory(76, mockUpStrand());
const o2 = pAequorFactory(77, mockUpStrand());
const p2= pAequorFactory(78, mockUpStrand());
const q2 = pAequorFactory(79, mockUpStrand());
const r2 = pAequorFactory(80, mockUpStrand());
const s2 = pAequorFactory(81, mockUpStrand());
const t2 = pAequorFactory(82, mockUpStrand());
const u2 = pAequorFactory(83, mockUpStrand());
const w2 = pAequorFactory(84, mockUpStrand());
const x2 = pAequorFactory(85, mockUpStrand());
const y2 = pAequorFactory(86, mockUpStrand());
const z2 = pAequorFactory(87, mockUpStrand());
const a3 = pAequorFactory(90, mockUpStrand());
const b3 = pAequorFactory(91, mockUpStrand());
const c3 = pAequorFactory(92, mockUpStrand());
const d3 = pAequorFactory(93, mockUpStrand());
const e3 = pAequorFactory(94, mockUpStrand());
const f3 = pAequorFactory(95, mockUpStrand());
const g3 = pAequorFactory(96, mockUpStrand());
const h3 = pAequorFactory(100, mockUpStrand());
const i3 = pAequorFactory(101, mockUpStrand());
const j3 = pAequorFactory(102, mockUpStrand());
const k3 = pAequorFactory(103, mockUpStrand());
const m3 = pAequorFactory(104, mockUpStrand());
const l3 = pAequorFactory(105, mockUpStrand());
const n3 = pAequorFactory(106, mockUpStrand());
const o3 = pAequorFactory(107, mockUpStrand());
const p3= pAequorFactory(108, mockUpStrand());
const q3 = pAequorFactory(109, mockUpStrand());
const r3 = pAequorFactory(110, mockUpStrand());
const s3 = pAequorFactory(111, mockUpStrand());
const t3 = pAequorFactory(112, mockUpStrand());
const u3 = pAequorFactory(113, mockUpStrand());
const w3 = pAequorFactory(114, mockUpStrand());
const x3 = pAequorFactory(115, mockUpStrand());
const y3 = pAequorFactory(116, mockUpStrand());
const z3 = pAequorFactory(117, mockUpStrand());
const p4 = pAequorFactory(118, mockUpStrand());
const q4 = pAequorFactory(119, mockUpStrand());
const r4 = pAequorFactory(120, mockUpStrand());
const s4 = pAequorFactory(121, mockUpStrand());
const t4 = pAequorFactory(122, mockUpStrand());
const u4 = pAequorFactory(123, mockUpStrand());
const w4 = pAequorFactory(124, mockUpStrand());
const x4 = pAequorFactory(125, mockUpStrand());
const y4 = pAequorFactory(126, mockUpStrand());
const z4 = pAequorFactory(127, mockUpStrand());
const A4 = pAequorFactory(129, mockUpStrand());
const B4 = pAequorFactory(130, mockUpStrand());
const C4 = pAequorFactory(131, mockUpStrand());
const D4 = pAequorFactory(132, mockUpStrand());
const E4 = pAequorFactory(133, mockUpStrand());
const F4 = pAequorFactory(134, mockUpStrand());
//+++++++++++++++++++++++++++++++++++++++++++
const c5 = pAequorFactory(135, mockUpStrand());
const d5 = pAequorFactory(136, mockUpStrand());
const e5 = pAequorFactory(137, mockUpStrand());
const f5 = pAequorFactory(138, mockUpStrand());
const g5= pAequorFactory(139, mockUpStrand());
const h5 = pAequorFactory(140, mockUpStrand());

const i5 = pAequorFactory(141, mockUpStrand());
const j5 = pAequorFactory(142, mockUpStrand());
const k5 = pAequorFactory(143, mockUpStrand());
const m5 = pAequorFactory(144, mockUpStrand());
const l5 = pAequorFactory(145, mockUpStrand());
const n5 = pAequorFactory(146, mockUpStrand());
const o5 = pAequorFactory(147, mockUpStrand());

const specimens =[];


specimens.push(primero);
specimens.push(dos);
specimens.push(a);
specimens.push(b);
specimens.push(c);
specimens.push(d);
specimens.push(e);
specimens.push(f);
specimens.push(g);
specimens.push(h);
specimens.push(i);
specimens.push(j);
specimens.push(k);
specimens.push(l);
specimens.push(m);
specimens.push(n);
specimens.push(o);
specimens.push(p);
specimens.push(q);
specimens.push(r);
specimens.push(s);
specimens.push(t);
specimens.push(u);
specimens.push(w);
specimens.push(x);
specimens.push(y);
specimens.push(z);
specimens.push(A);
specimens.push(B);
specimens.push(C);
specimens.push(D);
specimens.push(E);
specimens.push(F);
specimens.push(c1);
specimens.push(d1);
specimens.push(e1);
specimens.push(f1);
specimens.push(g1);
specimens.push(h1);
specimens.push(i1);
specimens.push(j1);
specimens.push(k1);
specimens.push(l1);
specimens.push(m1);
specimens.push(n1);
specimens.push(o1);
specimens.push(p1);
specimens.push(q1);
specimens.push(r1);
specimens.push(s1);
specimens.push(t1);
specimens.push(u1);
specimens.push(w1);
specimens.push(x1);
specimens.push(y1);
specimens.push(z1);
specimens.push(A1);
specimens.push(B1);
specimens.push(C1);
specimens.push(D1);
specimens.push(E1);
specimens.push(F1)
specimens.push(a2);
specimens.push(b2);
specimens.push(c2);
specimens.push(d2);
specimens.push(e2);
specimens.push(f2);
specimens.push(g2);
specimens.push(h2);
specimens.push(i2);
specimens.push(j2);
specimens.push(k2);
specimens.push(l2);
specimens.push(m2);
specimens.push(n2);
specimens.push(o2);
specimens.push(p2);
specimens.push(q2);
specimens.push(r2);
specimens.push(s2);
specimens.push(t2);
specimens.push(u2);
specimens.push(w2);
specimens.push(x2);
specimens.push(y2);
specimens.push(z2);
specimens.push(a3);
specimens.push(b3);
specimens.push(c3);
specimens.push(d3);
specimens.push(e3);
specimens.push(f3);
specimens.push(g3);
specimens.push(h3);
specimens.push(i3);
specimens.push(j3);
specimens.push(k3);
specimens.push(l3);
specimens.push(m3);
specimens.push(n3);
specimens.push(o3);
specimens.push(p3);
specimens.push(q3);
specimens.push(r3);
specimens.push(s3);
specimens.push(t3);
specimens.push(u3);
specimens.push(w3);
specimens.push(x3);
specimens.push(y3);
specimens.push(z3);
specimens.push(p4);
specimens.push(q4);
specimens.push(r4);
specimens.push(s4);
specimens.push(t4);
specimens.push(u4);
specimens.push(w4);
specimens.push(x4);
specimens.push(y4);
specimens.push(z4);
specimens.push(A4);
specimens.push(B4);
specimens.push(C4);
specimens.push(D4);
specimens.push(E4);
specimens.push(F4)
specimens.push(c5);
specimens.push(d5);
specimens.push(e5);
specimens.push(f5);
specimens.push(g5);
specimens.push(h5);
specimens.push(i5);
specimens.push(j5);
specimens.push(k5);
specimens.push(l5);
specimens.push(m5);
specimens.push(n5);
specimens.push(o5);

let counter =0;
let survivors = [];
for (let i=0; i<specimens.length; i++){
  let y = specimens[i].willLikelySurvive();
  if (y){ ;
    counter = counter+1;
    if( counter <= 30){
      survivors.push(specimens[i]);
    }
    else {
      break;
    }
  }
}
console.log(... survivors);
