function normalize(x, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
}